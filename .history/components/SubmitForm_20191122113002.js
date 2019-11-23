import { useState, useCallback } from "react";

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
  <Form onSubmit={handleSubmit}>
   <FormLayout>
    <Checkbox label='Sign up for the Polaris newsletter' checked={newsletter} onChange={handleNewsLetterChange} />

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
 );
}

export default AppForm;
