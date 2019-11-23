// src/Data-context.js
import React, { useState } from 'react';
import { Parser } from 'hot-formula-parser';
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
	let { type, x, y, value, tableData } = action;
	switch (type) {
		case 'LOAD_DATA': {
			// Data at this stage has been normalized
			tableData = JSON.parse(tableData);
			const [width, height] = getTableDimensions(tableData);
			return { ...state, tableData, size: { width, height } };
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
			const code = action.code;
			let { x, y } = state.coordinates;
			// Left arrow press
			if (code === 37 && x !== 0) {
				return { ...state, coordinates: [x - 1, y] };
			}
			// Up arrow press
			else if (code === 38 && y !== 0) {
				return { ...state, coordinates: [x, y - 1] };
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
	const [state, dispatch] = React.useReducer(reducer, {
		coordinates: [0, 0],
		size: [3, 6],
		tableData: [['Keira', 'goes', 'remote']],
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
		throw new Error('useDataState must be used within a DataProvider');
	}
	return context;
}

function useDataDispatch() {
	const context = React.useContext(DataDispatchContext);
	if (context === undefined) {
		throw new Error('useDataDispatch must be used within a DataProvider');
	}
	return context;
}

function updateCell(dispatch, x, y, value) {
	if (value && value.charAt(0) == '=') {
		// Effective formula
	}

	dispatch({ type: 'SAVE_CELL', x, y, value });
}

export { DataProvider, DataStateContext, useDataState, useDataDispatch, updateCell };
