export const ContactList = ({ contacts, deleteContact, onChange }) => (
  <ul>
    {contacts.map(contact => {
      return (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <span>{contact.number}</span>
          <button type="submit" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
