import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // same structure you used in context
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size } = action.payload;

      if (!size) return;

      if (!state.items[id]) state.items[id] = {};
      if (!state.items[id][size]) state.items[id][size] = 0;

      state.items[id][size] += 1;
    },

    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      state.items[id][size] = quantity;
    },

    removeItem: (state, action) => {
      const { id, size } = action.payload;
      if (state.items[id]?.[size]) {
        state.items[id][size] = 0;
      }
    }
  },
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;