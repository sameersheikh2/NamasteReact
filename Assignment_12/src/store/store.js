import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import fetchRestaurantSlice from "./fetchRestaurantSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    fetchBy: fetchRestaurantSlice,
  },
});

export default store;
