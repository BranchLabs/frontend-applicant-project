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
  const [state, dispatch] = React.useReducer(DataReducer, { width: 2, height: 2, tableData: [] });
  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
}

export { DataDispatchContext, DataStateContext };
