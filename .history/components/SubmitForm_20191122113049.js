import { useState, useCallback } from "react";
import { Form, FormLayout, TextField, Button } from "@shopify/polaris";

function AppForm() {
 const [newsletter, setNewsletter] = useState(false);
 const [email, setEmail] = useState("");

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
      label='Email'
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
