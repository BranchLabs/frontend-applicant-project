// src/Data-context.js
import React, { useState } from 'react';
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
			// Data at this stage has been normalized
			tableData = JSON.parse(tableData);
			return { ...state, tableData, size: getTableDimensions(tableData), coordinates: [0, 0] };
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
		size: [3, 9],
		tableData: [
			['Kiril', '->', 'BranchLabs'],
			[1, 2, 3],
			['React Hooks', '=SUM(A1:A2)', '=SUM(A2, A2)'],
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

function updateCell(dispatch, table, x, y, value) {
	if (value && value.charAt(0) == '=') {
		Excel.on('callCellValue', function(cellCoord, done) {
			// using label
			let row = cellCoord.row.index;
			let column = cellCoord.column.index;
			done(get(table, `[${row}][${column}]`, undefined));
		});

		// An equals sign represents the possibility of a formula
		value = Excel.parse(value.substring(1));
		if (value.result) {
			dispatch({ type: 'SAVE_CELL', x, y, value });
		} else dispatch({ type: 'SAVE_CELL', x, y, value: '#ERROR' });
		return;
	}

	console.log('value parsed', value);
	//dispatch({ type: 'SAVE_CELL', x, y, value });
}

export { DataProvider, DataStateContext, useDataState, useDataDispatch, updateCell };
