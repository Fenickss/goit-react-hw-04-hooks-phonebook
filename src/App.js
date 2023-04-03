import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import { ToastContainer, toast } from 'react-toastify';
import FormContact from './Components/FormContact/FormContact';
import ContactList from './Components/ContactList';
import Container from './Components/Container';
import Filter from './Components/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = { id: nanoid(), name: name, number: number };

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <FormContact onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList onDeleteContact={deleteContact} contacts={visibleContacts} />
    </Container>
  );
};

export default App;
