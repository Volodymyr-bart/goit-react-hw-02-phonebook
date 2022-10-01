import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  background: pink;
`;

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
        </label>
        <label htmlFor="pasword">
          Login
          <Input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
