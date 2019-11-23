import { useState, useCallback, useReducer } from "react";
import { Card, Form, FormLayout, TextField, Button } from "@shopify/polaris";

function hasJsonStructure(jsonString) {
  try {
    var o = JSON.parse(jsonString);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}

  return false;
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
    console.log("Submitting", data);
    const dataStructure = hasJsonStructure(data);
    console.log("dataStructure", dataStructure);
  }, []);

  const toastMarkup = toast.active ? <Toast content={toast.message} onDismiss={toast.active} error={toast.error} /> : null;

  return (
    <Card sectioned>
      {toastMarkup}
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField value={data} onChange={handleDataChange} label='Data key' helpText={<span>Per instructions, this form only supports json.</span>} />

          <Button submit primary>
            Load Data
          </Button>
        </FormLayout>
      </Form>
    </Card>
  );
}

export default AppForm;
