import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const initState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || initState
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filterContact = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onAddContact = ({ name, number }) => {
    if (
      contacts.filter(elem => elem.name.toLowerCase() === name.toLowerCase())
        .length > 0
    ) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = { id: crypto.randomUUID(), name, number };
    setContacts(prev => [...prev, newContact]);
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>PhoneBook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContact} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
