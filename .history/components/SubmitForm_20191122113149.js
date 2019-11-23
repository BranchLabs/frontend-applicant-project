import { useState, useCallback } from "react";
import { Card, Form, FormLayout, TextField, Button } from "@shopify/polaris";

function AppForm() {
 const [data, setData] = useState("[[1], [2, 3], [4, 5, 6], [], [7, 8, 9, 0]]");

 const handleSubmit = useCallback(_event => {
  setEmail("");
  setNewsletter(false);
 }, []);

 const handleNewsLetterChange = useCallback(value => setNewsletter(value), []);

 const handleEmailChange = useCallback(value => setEmail(value), []);

 return (
  <Card sectioned>
   <Form onSubmit={handleSubmit}>
    <FormLayout>
     <TextField
      value={email}
      onChange={handleEmailChange}
      label='Data key'
      type='email'
      helpText={<span>We’ll use this email address to inform you on future changes to Polaris.</span>}
     />

     <Button submit>Submit</Button>
    </FormLayout>
   </Form>
  </Card>
 );
}

export default AppForm;
