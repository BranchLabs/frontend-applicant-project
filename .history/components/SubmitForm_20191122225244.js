import { useState, useCallback, useReducer } from "react";

import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Frame, Card, Form, FormLayout, TextField, InlineError, Button, Toast } from "@shopify/polaris";

function hasJsonStructure(jsonString) {
  try {
    let o = JSON.parse(jsonString);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}

  return false;
}

function reducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return { ...state, active: true, message: "Error", error: true, inlineError: "The data was not valid JSON" };
    case "ACCEPT":
      return { ...state, active: true, message: "Data saved", error: false, inlineError: false };
    case "CLEANUP":
      return { ...state, active: false, error: false };
    default:
      throw new Error();
  }
}

function AppForm() {
  // JSON data input
  const [data, setData] = useState("[[1], [2, 3], [4, 5, 6], [], [7, 8, 9, 0]]");
  const handleDataChange = useCallback(value => setData(value), []);
  // Toast dispatcher
  // TODO: Reducer seems overkill, but easily extendible
  const [toast, dispatch] = useReducer(reducer, { active: false, message: "Parsing data", error: false });

  const handleSubmit = useCallback(() => {
    // Prevent form from accepting non-json data types
    // TODO: Accept stringified json?
    const dataStructure = hasJsonStructure(data);
    if (!dataStructure) dispatch({ type: "ERROR" });
    else {
      dispatch({ type: "ACCEPT" });
    }
  }, [data]);

  const toastMarkup = toast.active ? (
    <Toast
      content={toast.message}
      onDismiss={() => {
        dispatch({ type: "CLEANUP" });
      }}
      error={toast.error}
    />
  ) : null;

  return (
    <Frame>
      <Card title='Add your JSON' sectioned>
        {toastMarkup}
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField value={data} onChange={handleDataChange} label='Data key' helpText={<span>Per instructions, this form only supports json.</span>} />
            {toast.error && toast.inlineError ? <InlineError message={toast.inlineError} fieldID='myFieldID' /> : null}
            <Button submit primary>
              Load Data
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Frame>
  );
}

export default AppForm;
