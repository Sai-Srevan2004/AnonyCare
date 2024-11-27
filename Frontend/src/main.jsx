import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import  persistedReducer from './Reducer/index.jsx';

// Configure Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
const persistor = persistStore(store);

// Render App
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <Toaster />
    </PersistGate>
  </Provider>
);
