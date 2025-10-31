import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    search: searchReducer,
    user: userReducer,
  },
});