import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      const findElement = state.find(findEl => findEl.id === action.payload);
      if (findElement !== undefined) {
        const indexElement = state.indexOf(findElement);
        if (indexElement !== -1) {
          return state.filter(elem => elem.id !== action.payload);
        }
      }
    },
    filterContacts(state, action) {
      const contactsFilter = [];
      const filterArray = state.filter(contact =>
        contact.name.toUpperCase().includes(action)
      );
      if (filterArray.length > 0) {
        for (const i of filterArray) {
          contactsFilter.push(i);
        }
        return contactsFilter;
      }
      return state;
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return action.payload;
    },
  },
});

export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
