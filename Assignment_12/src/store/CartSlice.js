import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const items = state.filter((item) => item.id === action.payload.id);
      if (items.length === 0) {
        const item = action.payload;
        item.quantity = 1;
        state.push(item);
      } else {
        state.map((item) =>
          item.id === action.payload.id ? item.quantity++ : item
        );
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
