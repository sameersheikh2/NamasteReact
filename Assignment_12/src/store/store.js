import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FetchRestaurantSlice from "./FetchRestaurantSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    fetchBy: FetchRestaurantSlice,
  },
});

export default store;
