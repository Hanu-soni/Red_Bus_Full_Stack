// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/index';

// // export const store = createStore(
// //   rootReducer,
// //   applyMiddleware(thunk)
// // );

// const store = createStore(rootReducer,applyMiddleware(thunk))
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/combinereducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
