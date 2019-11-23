// src/Data-context.js
import React from "react";
const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

function DataReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function DataProvider({ children }) {
  const [state, dispatch] = React.useReducer(DataReducer, { width: 5, height: 5 });
  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
}
function useDataState() {
  const context = React.useContext(DataStateContext);

  return context;
}
function useDataDispatch() {
  const context = React.useContext(DataDispatchContext);

  return context;
}
export { DataProvider, useDataState, useDataDispatch };
