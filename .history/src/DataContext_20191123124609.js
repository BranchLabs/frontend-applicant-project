// src/Data-context.js
import React, { useState } from "react";
import { Parser } from "hot-formula-parser";
const Excel = new Parser();
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

function TableDimensions(data) {
  let width = 0;
  data.forEach(element => {
    if (element.length > width) width = element.length;
  });
  // width and height of table
  return [width, data.length];
}

function DataReducer(state, action) {
  let { type, x, y, value, tableData } = action;
  switch (type) {
    case "LOAD_DATA": {
      // Data at this stage has been normalized
      tableData = JSON.parse(tableData);
      const [width, height] = TableDimensions(tableData);
      return { ...state, tableData, size: { width, height } };
    }

    case "SAVE_CELL": {
      // Save to array
      let newTable = state.tableData;
      if (!newTable[y]) newTable[y] = [];
      newTable[y][x] = value;
      return { ...state, tableData: newTable };
    }

    case "SET_SELECTION": {
      return { ...state, coordinates: action.coordinates };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = React.useReducer(DataReducer, {
    coordinates: { x: 0, y: 0 },
    size: { width: 3, height: 6 },
    tableData: [
      ["Keira", "goes", "remote"],
      [1, 2, "", "&"]
    ]
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
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
}

function useDataDispatch() {
  const context = React.useContext(DataDispatchContext);
  if (context === undefined) {
    throw new Error("useDataDispatch must be used within a DataProvider");
  }
  return context;
}

function updateCell(dispatch, x, y, value) {
  console.log("formula", value.charAt(0));
  if (value && value.slice(0, 1) == "=") {
    console.log("formula", value.slice(0, 1));
  }

  dispatch({ type: "SAVE_CELL", x, y, value });
}

export { DataProvider, DataStateContext, useDataState, useDataDispatch, updateCell };
