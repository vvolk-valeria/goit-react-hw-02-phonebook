import { ContainerList, Item, Btn } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact, onChange }) => (
  <ContainerList>
    {contacts.map(contact => {
      return (
        <Item key={contact.id}>
          <p>{contact.name}</p>
          <span>{contact.number}</span>
          <Btn type="submit" onClick={() => deleteContact(contact.id)}>
            Delete
          </Btn>
        </Item>
      );
    })}
  </ContainerList>
);
