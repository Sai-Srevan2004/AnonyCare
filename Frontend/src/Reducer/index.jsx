import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../Slices/authSlice"
import messageReducer from "../Slices/messageSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    message:messageReducer
})

export default rootReducer