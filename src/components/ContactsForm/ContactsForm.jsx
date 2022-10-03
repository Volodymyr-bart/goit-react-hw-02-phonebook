import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(6).max(16).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const Input = styled(Field)`
  background: pink;
`;

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    resetForm();
    addContact(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor="number">
          Telephone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
