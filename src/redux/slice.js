import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Valeriy Zalujniy', number: '111-11-11' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
