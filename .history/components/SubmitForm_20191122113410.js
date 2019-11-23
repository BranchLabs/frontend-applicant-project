import { useState, useCallback } from "react";
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

function AppForm() {
 const [data, setData] = useState("[[1], [2, 3], [4, 5, 6], [], [7, 8, 9, 0]]");

 const handleSubmit = useCallback(_event => {
  setEmail("");
  setNewsletter(false);
 }, []);

 const handleDataChange = useCallback(value => setEmail(value), []);

 return (
  <Card sectioned>
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
