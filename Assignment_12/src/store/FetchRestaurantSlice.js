import { createSlice } from "@reduxjs/toolkit";
import { ALL_RESTAURANT } from "../constants";

const fetchRestaurantSlice = createSlice({
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

export const { fetchRestaurantBy } = fetchRestaurantSlice.actions;
export default fetchRestaurantSlice.reducer;
