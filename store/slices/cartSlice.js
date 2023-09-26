import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { slug, color, size, quantity } = action.payload;
      const duplicate = state.cart.find(
        (e) => e.slug === slug && e.color === color && e.size === size
      );

      if (duplicate) {
        const otherData = state.cart.filter((e) => e !== duplicate);

        const updatedItem = {
          ...duplicate,
          quantity: duplicate.quantity + quantity,
        };
        state.cart = [...otherData, updatedItem];
      } else {
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            id: state.cart.length > 0 ? state.cart[state.cart.length - 1].id + 1 : 1,
          },
        ];
      }
    },
    updateItem: (state, action) => {
      const { slug, color, size, price, quantity } = action.payload;

      const item = state.cart.find((e) => e.slug === slug && e.color === color && e.size === size);

      if (!item) return;

      state.cart = state.cart.filter((e) => e !== item);

      state.cart = [
        ...state.cart,
        {
          id: item.id,
          slug,
          color,
          size,
          price,
          quantity,
        },
      ];
    },

    removeItem: (state, action) => {
      const item = action.payload;
      state.cart = state.cart.filter(
        (e) => e.slug !== item.slug || e.color !== item.color || e.size !== item.size
      );
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
