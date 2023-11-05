import { createSlice } from "@reduxjs/toolkit";
import { productsRecord } from "../assets/data/products";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface ProductsSliceType {
  selectedData: string[];
  data: Product[];
  isSelected: boolean;
}

export const productSlice = createSlice({
  name: "Products",
  initialState: {
    isSelected: false,
    selectedData: [],
    data: productsRecord,
  } as ProductsSliceType,
  reducers: {
    toggleProduct: (
      state: ProductsSliceType,
      action: PayloadAction<string>
    ) => {
      const selectedId = action.payload;
      if (state.selectedData.includes(selectedId)) {
        state.selectedData = state.selectedData.filter(
          (id) => id !== selectedId
        );
      } else {
        state.selectedData = [...state.selectedData, selectedId];
        state.isSelected = true;
      }
      if (state.selectedData.length <= 0) {
        state.isSelected = false;
      }
    },

    removeAllSelectedProducts: (state: ProductsSliceType) => {
      state.data = state.data.filter(
        (product) => !state.selectedData.includes(product.id)
      );
      state.selectedData = [];
      state.isSelected = false;
    },

    moveSelectedProduct: (
      state: ProductsSliceType,
      action: PayloadAction<Product[]>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { toggleProduct, removeAllSelectedProducts, moveSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
