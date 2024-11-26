import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // signupData: null,
  // loading: false,
  token: JSON.parse(localStorage.getItem("anonytoken")) ? JSON.parse(localStorage.getItem("anonytoken")) : null,
  authUser:null,
  otherUsers:null,
  selectedUser:null,
  onlineUsers:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
    Logout(state,value)
    {
      state.token=value.payload
    },
    setAuthUser:(state,action)=>{
      state.authUser = action.payload;
  },
  setOtherUsers:(state, action)=>{
      state.otherUsers = action.payload;
  },
  setSelectedUser:(state,action)=>{
      state.selectedUser = action.payload;
  },
  setOnlineUsers:(state,action)=>{
      state.onlineUsers = action.payload;
  }
  },
});

export const {  setToken ,Logout,setAuthUser,setOtherUsers,setSelectedUser,setOnlineUsers} = authSlice.actions;

export default authSlice.reducer;