import { useState, useCallback, useReducer } from "react";
import { Card, Form, FormLayout, TextField, Button } from "@shopify/polaris";

function hasJsonStructure(str) {
  if (typeof str !== "string") return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === "[object Object]" || type === "[object Array]";
  } catch (err) {
    return false;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return { ...state, message: "Could not load", error: true };
    case "ACCEPT":
      useCallback(() => setActive(active => !active), []);
      return { ...state, message: "Data saved", error: false };
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

  const handleSubmit = useCallback(_event => {
    // Prevent form from accepting non-json data types
    // TODO: Accept stringified json?
    const dataStructure = hasJsonStructure(data);
    console.log("dataStructure", dataStructure);
  }, []);

  const toastMarkup = toast.active ? <Toast content={toast.message} onDismiss={toast.active} error={toast.error} /> : null;

  return (
    <Card sectioned>
      {toastMarkup}
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField value={data} onChange={handleDataChange} label='Data key' type='email' helpText={<span>Per instructions, this form only supports json.</span>} />

          <Button submit primary>
            Load Data
          </Button>
        </FormLayout>
      </Form>
    </Card>
  );
}

export default AppForm;
