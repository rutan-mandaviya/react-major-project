import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Product: [],
};

const ProductsSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    Loadproducts: (state, action) => {
      state.Product = action.payload;
    },
  },
});

export default ProductsSlice.reducer;
export const { Loadproducts } = ProductsSlice.actions;
