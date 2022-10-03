export const ContactPerson = ({ name, number, id }) => {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button>Delete</button>
    </li>
  );
};
