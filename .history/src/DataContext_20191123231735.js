// src/Data-context.js
import React from 'react';
import { Parser } from 'hot-formula-parser';
import get from 'lodash/get';
const Excel = new Parser();
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

function getTableDimensions(data) {
	let width = 0;
	data.forEach(element => {
		if (element.length > width) width = element.length;
	});
	// width and height of table
	return [width, data.length];
}

function reducer(state, action) {
	let { type, x, y, value, tableData, code } = action;
	switch (type) {
		case 'LOAD_DATA': {
			// Raw ata at this stage has been normalized
			tableData = JSON.parse(tableData);
			let size = getTableDimensions(tableData);
			// TODO: Let user decide if the input JSON should instantly be normalized
			let normalizedData = tableData.map(function(tableRow) {
				return tableRow.map((value, index) => {
					let normalizedValue = value ? parseFomula(tableData, value) : value;
					return normalizedValue;
				});
			});

			console.log('normalizedData', normalizedData);
			return { ...state, tableData: normalizedData, size, coordinates: [0, 0] };
		}

		case 'SAVE_CELL': {
			// Save to array
			let newTable = state.tableData;
			if (!newTable[y]) newTable[y] = [];
			newTable[y][x] = value;
			return { ...state, tableData: newTable };
		}

		case 'SET_SELECTION': {
			return { ...state, coordinates: action.coordinates };
		}

		case 'ARROW_KEY_PRESS': {
			let [x, y] = state.coordinates;
			let [width, height] = state.size;

			if (code === 37 && x !== 0) {
				// Left arrow press
				return { ...state, coordinates: [--x, y] };
			} else if (code === 38 && y !== 0) {
				// Up arrow press
				return { ...state, coordinates: [x, --y] };
			} else if (code === 39 && x !== width - 1) {
				// Right arrow press
				return { ...state, coordinates: [++x, y] };
			} else if (code === 40 && y !== height - 1) {
				// Down arrow press
				return { ...state, coordinates: [x, ++y] };
			}

			return { ...state };
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

/*
 * Coodinates and size use 'tuples' instead of objects.
 * The readability becomes worse (no size.width) but
 * doing object comparisons and state chnages is easier.
 */

function DataProvider({ children }) {
	// Default table state
	const [state, dispatch] = React.useReducer(reducer, {
		coordinates: [0, 0],
		size: [3, 3],
		tableData: [
			['Kiril', '->', 'BranchLabs'],
			[1, 2, 3],
			['React Hooks', '=SUM(A2: B3)', '=SUM(A2, A2)'],
		],
	});
	return (
		<DataStateContext.Provider value={state}>
			<DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
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

function parseFomula(table, value) {
	if (value && value.charAt(0) == '=') {
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
				for (let c = startCellCoord.column.index; c <= endCellCoord.column.index; c++) {
					let contents = get(table, `[${r}][${c}]`, null);
					collection.push(contents);
				}
			}

			if (collection) {
				done(collection);
			}
		});
		// An equals sign represents the possibility of a formula
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

export { DataProvider, DataStateContext, useDataState, useDataDispatch, updateCell };
