// src/Data-context.js
import React, { useState } from "react";
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

function TableDimensions(data) {
  let width = 0;
  data.forEach(element => {
    if (element.length > width) width = element.length;
  });
  return [width, data.length];
}

function DataReducer(state, action) {
  let { type, tableData } = action;
  switch (type) {
    case "LOAD_DATA": {
      // Data at this stage has been normalized
      // Determine width and height values
      tableData = JSON.parse(tableData);
      const [width, height] = TableDimensions(tableData);
      return { ...state, tableData, width, height };
    }
    case "SET_SELECTION": {
      return { ...state, x: action.x, y: action.y };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function DataProvider({ children }) {
  const [state, dispatch] = React.useReducer(DataReducer, {
    coordindates: [0, 0],
    width: 3,
    height: 4,
    tableData: [
      ["Keira", "goes", "remote"],
      [1, 2]
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
export { DataProvider, DataStateContext, useDataState, useDataDispatch };
