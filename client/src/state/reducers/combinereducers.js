// import { combineReducers } from "redux";
// import busDataReducer from "./busData";
// import fromToReducer from "./fromTo";
// import userDetailsReducer from "./userDetails";
// // import buslocationReducer from "./busLocationReducer";

// //main reducer of the App
// const rootReducer = combineReducers ({
//     busData: busDataReducer,
//     fromTo:fromToReducer,
//     userDetails:userDetailsReducer
// })

// export default rootReducer
import { combineReducers } from "@reduxjs/toolkit";
import setBusData from "./busData";
import setFromTo from "./fromTo";
import setUserDetails from "./userDetails";

const rootReducer = combineReducers({
  busData: setBusData,
  fromTo: setFromTo,
  userDetails: setUserDetails,
});

export default rootReducer;
