import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import {
  //contactsReducer,
  filterReducer,
  filterContactsReducer,
  contactsReducer,
} from './slice';

const persistConfig = {
  key: 'contacts',
  storage,
};

//const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const redusers = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filter: filterReducer,
  contactsFilter: filterContactsReducer,
});

export const store = configureStore({
  reducer: redusers,
  //  reducer: {
  //  contacts: persistedContactsReducer,
  //   filter: filterReducer,
  //   contactsFilter: filterContactsReducer,
  //  },
  // middleware: getDefaultMiddleware =>
  //    getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

//export const persistor = persistStore(store);
