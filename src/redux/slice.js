import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      const findElement = state.contacts.find(
        findEl => findEl.id === action.payload
      );

      if (findElement !== undefined) {
        const indexElement = state.contacts.indexOf(findElement);

        if (indexElement !== -1) {
          const newArray = state.contacts.filter(
            elem => elem.id !== action.payload
          );
          state.contacts = [...newArray];
        }
      }
    },
  },
});

//const filterSlice = createSlice({
//  name: 'filter',
//  initialState: '',
//  reducers: {
//    updateFilter(state, action) {
//      return action.payload;
//    },
//  },
//});

//const contactsFilterSlice = createSlice({
// name: 'contactsFilter',
// initialState: [],
//reducers: {
//   filterContacts(state, action) {
//     const filterArray = action.payload.contacts.filter(contact =>
//      contact.name.toUpperCase().includes(action.payload.filterContact)
//    );
//    if (filterArray.length > 0) {
//      for (const i of filterArray) {
//        state.push(i);
//      }
//    }
//  },

//  resetFilterContacts(state, action) {
//     return [];
//   },
//  },
//});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//export const { updateFilter } = filterSlice.actions;
//export const filterReducer = filterSlice.reducer;

//export const { filterContacts, resetFilterContacts } =
// contactsFilterSlice.actions;
//export const filterContactsReducer = contactsFilterSlice.reducer;
