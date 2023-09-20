import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./slices/productSlice";

const store = configureStore({
  reducer: { product: productSliceReducer },
});

export default store;
