import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // signupData: null,
  // loading: false,
  token: JSON.parse(localStorage.getItem("anonytoken")) ? JSON.parse(localStorage.getItem("anonytoken")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // setSignupData(state, value) {
    //   state.signupData = value.payload;
    // },
    // setLoading(state, value) {
    //   state.loading = value.payload;
    // },
    setToken(state, value) {
      state.token = value.payload;
    },
    Logout(state,value)
    {
      state.token=value.payload
    }
  },
});

export const {  setToken ,Logout} = authSlice.actions;

export default authSlice.reducer;