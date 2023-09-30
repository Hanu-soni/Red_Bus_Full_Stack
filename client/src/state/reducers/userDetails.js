// import actionTypes from "../../constants/actionTypes";

// const INIT_STATE = [];

// const userDetailsReducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//       case actionTypes.SET_USER_DETAILS:
//         return {
//           ...state,
//           INIT_STATE: action.payload,
//         };

//       default:
//         return state;
//     }
//   };

//   export default userDetailsReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
