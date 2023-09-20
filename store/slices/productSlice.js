import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../data/products";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts() {},
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
