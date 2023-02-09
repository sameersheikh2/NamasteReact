import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: ["apple", "banana", "cherry"] },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
