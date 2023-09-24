import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: { product: productSliceReducer, cart: cartSliceReducer },
});

export default store;
