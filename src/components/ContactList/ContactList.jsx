import { ContactPerson } from 'components/ContactPerson/ContactPerson';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactPerson key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
