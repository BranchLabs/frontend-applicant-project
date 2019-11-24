// src/Data-context.js
import React from 'react';
import { Parser } from 'hot-formula-parser';
import { get, set } from 'lodash';
const Excel = new Parser();
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

// Loop through rows and find the longest 2D array element
function getTableDimensions(data) {
	let width = 0;
	if (Array.isArray(data)) {
		data.forEach(element => {
			if (element.length > width) width = element.length;
		});
	}

	return [width, data ? data.length : 0];
}

/*
 * Reducer handles cell navigation and updates
 * It does not mix the toast dispatchers
 * Any actions are available globally in the app
 */

function reducer(state, action) {
	let { type, x, y, value, tableData, code } = action;
	switch (type) {
		case 'LOAD_DATA': {
			// Input data is valid JSON here
			tableData = JSON.parse(tableData);
			let size = getTableDimensions(tableData);
			// Loop though array object and convert formulas to values
			// TODO: Let user decide if the input JSON should instantly be normalized
			let normalizedData = tableData.map(function(tableRow) {
				return tableRow.map(value => {
					let normalizedValue =
						value.length > 0 ? parseFomula(tableData, value) : value;
					return normalizedValue;
				});
			});

			return { ...state, tableData: normalizedData, size, coordinates: [0, 0] };
		}

		case 'SAVE_CELL': {
			let newTable = state.tableData;
			if (!newTable[y]) newTable[y] = [];
			newTable[y][x] = value;
			return { ...state, tableData: newTable };
		}

		case 'SET_MOUSE_DOWN': {
			return { ...state, mouseDown: !state.mouseDown };
		}

		case 'SET_SELECTION': {
			return {
				...state,
				coordinates: action.coordinates,
				selection_coordinates: action.coordinates,
			};
		}

		case 'SET_SELECTION_END': {
			return { ...state, selection_coordinates: [x, y] };
		}

		case 'MASS_DELETE': {
			let { tableData, coordinates, selection_coordinates } = state;
			// Prevent unncessary looping by defining clear start and end indexes
			// Sort is required to get the lowest x or y coordinate first
			let row_range = [coordinates[0], selection_coordinates[0]].sort();
			let column_range = [coordinates[1], selection_coordinates[1]].sort();

			for (let c = column_range[0]; c <= column_range[1]; c++) {
				for (let r = row_range[0]; r <= row_range[1]; r++) {
					set(tableData, `[${c}][${r}]`, null);
				}
			}

			return { ...state, tableData };
		}

		case 'ARROW_KEY_PRESS': {
			let [x, y] = state.coordinates;
			let [width, height] = state.size;

			// Prevents out-of-bounds navigation
			if (code === 37 && x !== 0) {
				--x; // Left arrow press
			} else if (code === 38 && y !== 0) {
				--y; // Up arrow press
			} else if (code === 39 && x !== width - 1) {
				++x; // Right arrow press
			} else if (code === 40 && y !== height - 1) {
				++y; // Down arrow press
			}

			return { ...state, coordinates: [x, y] };
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

/*
 * Coodinates and size use 'tuples' instead of objects.
 * Comparing tuples is less computing than deep isEquals on objects
 * The pattern is [0] is x, [1], is y
 */

function DataProvider({ children, initialData }) {
	// Default table state
	const [state, dispatch] = React.useReducer(
		reducer,
		initialData || {
			mouseDown: false,
			coordinates: [0, 0],
			selection_coordinates: [0, 0],
			size: [4, 3],
			tableData: [
				['Kiril', 'wants', 'to work', '@BranchLabs'],
				[1, 2, 3, 100],
				['React Hooks', '=SUM(A2:D3)', '=SUM(A2, A2)'],
			],
		},
	);

	return (
		<DataStateContext.Provider value={state}>
			<DataDispatchContext.Provider value={dispatch}>
				{children}
			</DataDispatchContext.Provider>
		</DataStateContext.Provider>
	);
}

function useDataState() {
	const context = React.useContext(DataStateContext);
	if (context === undefined) {
		throw new Error('Requires a context object');
	}
	return context;
}

function useDataDispatch() {
	const context = React.useContext(DataDispatchContext);
	if (context === undefined) {
		throw new Error('Requires a context object');
	}
	return context;
}

/*
 * Unless the value starts with an equals sign, return cell value
 */

function parseFomula(table, value) {
	if (value && value.length > 0 && value.charAt(0) === '=') {
		// This is called when there is a comma between variable names
		Excel.on('callCellValue', function(cellCoord, done) {
			// using label
			let row = cellCoord.row.index;
			let column = cellCoord.column.index;
			done(get(table, `[${row}][${column}]`, undefined));
		});

		// This is called when there is a range between variable names
		Excel.on('callRangeValue', function(startCellCoord, endCellCoord, done) {
			// A value like A1 would convert to [1][0]
			// Iterate over all values and collect them
			let collection = [];
			// Iterate over rows first
			for (let r = startCellCoord.row.index; r <= endCellCoord.row.index; r++) {
				for (
					let c = startCellCoord.column.index;
					c <= endCellCoord.column.index;
					c++
				) {
					let contents = get(table, `[${r}][${c}]`, null);
					collection.push(contents);
				}
			}

			if (collection) {
				done(collection);
			}
		});

		value = Excel.parse(value.substring(1));
		if (value.result) value = value.result;
		else value = value.error;
	}
	return value;
}

function updateCell(dispatch, table, x, y, value) {
	value = parseFomula(table, value);
	dispatch({ type: 'SAVE_CELL', x, y, value });
}

function isInRange(value, range) {
	return (value - range[0]) * (value - range[1]) <= 0;
}

export {
	DataProvider,
	DataStateContext,
	useDataState,
	useDataDispatch,
	updateCell,
	isInRange,
};
