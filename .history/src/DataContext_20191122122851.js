// src/Data-context.js
import React from "react";
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

function DataReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { Data: state.Data + 1 };
    }
    case "decrement": {
      return { Data: state.Data - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function DataProvider({ children }) {
  const [state, dispatch] = React.useReducer(DataReducer, { Data: 0 });
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
export { DataProvider, useDataState, useDataDispatch };
