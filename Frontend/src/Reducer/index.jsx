import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../Slices/authSlice"
import messageReducer from "../Slices/messageSlice"
import socketReducer from "../Slices/socketSlice"


import {
    persistReducer,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }


const rootReducer  = combineReducers({
    auth: authReducer,
    message:messageReducer,
    socket:socketReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default persistedReducer


