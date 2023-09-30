// import actionTypes from "../../constants/actionTypes";

// const INIT_STATE = [];

// const fromToReducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//       case actionTypes.SET_FROM_TO:
//         return {
//           ...state,
//           INIT_STATE: action.payload,
//         };

//       default:
//         return state;
//     }
//   };

//   export default fromToReducer;
import { createSlice } from "@reduxjs/toolkit";
const getDataFromLocalStroage = () => {
  let localData = localStorage.getItem("Bus");
  if (localData) {
    return JSON.parse(localData);
  } else {
    return [];
  }
};
const initialState = getDataFromLocalStroage();

const fromToSlice = createSlice({
  name: "fromTo",
  initialState,
  reducers: {
    setFromTo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFromTo } = fromToSlice.actions;
export default fromToSlice.reducer;
