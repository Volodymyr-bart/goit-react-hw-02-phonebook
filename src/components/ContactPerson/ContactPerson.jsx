export const ContactPerson = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
