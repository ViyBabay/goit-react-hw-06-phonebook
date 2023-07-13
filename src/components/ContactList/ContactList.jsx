import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts, selectFilter } from 'redux/slice';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={s.list}>
          {contact.name}: {contact.number}
          <button
            onClick={() => handleDeleteContact(contact.id)}
            className={s.delBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
