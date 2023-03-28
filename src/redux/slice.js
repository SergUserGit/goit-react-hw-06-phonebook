import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
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
    updateFilter(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
