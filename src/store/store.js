import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import productReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const productPersistConfig = {
  key: "product",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedProductReducer = persistReducer(productPersistConfig, productReducer);

const rootReducer = combineReducers({
  cart: persistedCartReducer,
  product: persistedProductReducer,
  search: searchReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);