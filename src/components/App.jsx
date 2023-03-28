import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  deleteContacts,
  updateFilter,
  filterContacts,
  resetFilterContacts,
} from 'redux/slice';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filterContactArray = useSelector(state => state.contactsFilter);

  const formSubmitHandler = data => {
    dispatch(resetFilterContacts());

    const findElem = contacts.filter(
      contact => contact.name.toUpperCase() === data.name.toUpperCase()
    );
    if (findElem.length > 0) {
      alert(data.name + ' is already in contacts.');
      return;
    }
    const newObj = { id: nanoid(), name: data.name, number: data.number };
    dispatch(addContacts(newObj));
  };

  const handleFilterChange = e => {
    dispatch(resetFilterContacts());
    const { value: filterContact } = e.target;
    dispatch(updateFilter(filterContact.toUpperCase()));
    dispatch(
      filterContacts({ contacts, filterContact: filterContact.toUpperCase() })
    );
  };

  const handleDeleteContact = el => {
    dispatch(resetFilterContacts());
    dispatch(deleteContacts(el.target.dataset.id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '50px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList
        handleDeleteContact={handleDeleteContact}
        contacts={filterContactArray.length > 0 ? filterContactArray : contacts}
      />
    </div>
  );
};

export default App;
