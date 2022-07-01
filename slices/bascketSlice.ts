import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: any, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: any, action: PayloadAction<any>) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state: any) => state.basket.items;
export default basketSlice.reducer;
