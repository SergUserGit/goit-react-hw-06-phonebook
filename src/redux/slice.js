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

const contactsFilterSlice = createSlice({
  name: 'contactsFilter',
  initialState: [],
  reducers: {
    filterContacts(state, action) {
      const filterArray = action.payload.contacts.filter(contact =>
        contact.name.toUpperCase().includes(action.payload.filterContact)
      );
      if (filterArray.length > 0) {
        for (const i of filterArray) {
          state.push(i);
        }
      }
    },

    resetFilterContacts(state, action) {
      return [];
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const { filterContacts, resetFilterContacts } =
  contactsFilterSlice.actions;
export const filterContactsReducer = contactsFilterSlice.reducer;
