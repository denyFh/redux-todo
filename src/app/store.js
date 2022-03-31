import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoSlice from '../features/todoSlice.js';

const reducers = combineReducers({
  todos : todoSlice
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: {
    todos: persistedReducer
  }
});

const persistor = persistStore(store)

export {store, persistor}
