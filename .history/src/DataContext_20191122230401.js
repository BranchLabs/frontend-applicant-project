// src/Data-context.js
import React, { useState } from "react";
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

function TableDimensions(data) {
  const [width, setWidth] = useState(0);
}

function DataReducer(state, action) {
  let { type, tableData } = action;
  switch (type) {
    case "LOAD_DATA": {
      // Data at this stage has been normalized
      // Determine width and height values
      return { ...state, tableData: JSON.parse(tableData) };
    }
    case "SAVE_DATA": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function DataProvider({ children }) {
  const [state, dispatch] = React.useReducer(DataReducer, {
    width: 2,
    height: 2,
    tableData: [
      [1, 2, 3],
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
