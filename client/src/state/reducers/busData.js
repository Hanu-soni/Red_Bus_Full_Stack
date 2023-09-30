// import actionTypes from "../../constants/actionTypes";

// const busLocation = [];

// const busDataReducer = (state = busLocation, action) => {
//     switch (action.type) {
//       case actionTypes.SET_BUSDATA:
//         return {
//           ...state,
//           busLocation: action.payload,
//         };

//       case actionTypes.SET_BUSDATA_ERROR:
//         return state;

//       default:
//         return state;
//     }
//   };

//   export default busDataReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const busDataSlice = createSlice({
  name: "busData",
  initialState,
  reducers: {
    setBusData: (state, action) => {
      return action.payload;
    },
    // No need to handle SET_BUSDATA_ERROR separately, as it doesn't modify the state
  },
});

export const { setBusData } = busDataSlice.actions;
export default busDataSlice.reducer;
