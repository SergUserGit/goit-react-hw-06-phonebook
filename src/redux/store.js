import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer, filterReducer, filterContactsReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    contactsFilter: filterContactsReducer,
  },
});
