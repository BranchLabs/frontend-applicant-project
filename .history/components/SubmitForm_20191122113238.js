import { useState, useCallback } from "react";
import { Card, Form, FormLayout, TextField, Button } from "@shopify/polaris";

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
