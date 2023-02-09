import { createSlice } from "@reduxjs/toolkit";
import { ALL_RESTAURANT } from "../constants";

const FetchRestaurantSlice = createSlice({
  name: "fetchBy",
  initialState: {
    fetchBy: ALL_RESTAURANT,
  },
  reducers: {
    fetchRestaurantBy(state, action) {
      state.fetchBy = action.payload;
    },
  },
});

export const { fetchRestaurantBy } = FetchRestaurantSlice.actions;
export default FetchRestaurantSlice.reducer;
