import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [contactsFilter, setContactsFilter] = useState([]);

  const formSubmitHandler = data => {
    setContactsFilter(state => []);
    const findElem = contacts.filter(
      contact => contact.name.toUpperCase() === data.name.toUpperCase()
    );
    if (findElem.length > 0) {
      alert(data.name + ' is already in contacts.');
      return;
    }
    const newObj = { id: nanoid(), name: data.name, number: data.number };
    setContacts(state => [...state, newObj]);
  };

  const handleFilterChange = e => {
    setContactsFilter(state => []);
    const { value: filterContact } = e.target;
    const filterArray = contacts.filter(contact =>
      contact.name.toUpperCase().includes(filterContact.toUpperCase())
    );
    if (filterArray.length > 0) {
      for (const i of filterArray) {
        setContactsFilter(state => [...state, i]);
      }
    }
  };

  const handleDeleteContact = el => {
    setContactsFilter(state => []);
    const findElement = contacts.find(
      findEl => findEl.id === el.target.dataset.id
    );
    if (findElement !== undefined) {
      const indexElement = contacts.indexOf(findElement);
      if (indexElement !== -1) {
        setContacts(state =>
          state.filter(elem => elem.id !== el.target.dataset.id)
        );
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
        contacts={contactsFilter.length > 0 ? contactsFilter : contacts}
      />
    </div>
  );
};

export default App;
