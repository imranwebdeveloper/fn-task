import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeAllSelectedProducts } from "../redux/productSlice";

const ProductHeader = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="px-8 py-5 border-b border-spacing-2">
      {products.isSelected ? (
        <div className="flex justify-between ">
          <label
            htmlFor="selected-product"
            className="flex items-center gap-4 text-2xl font-semibold"
          >
            <input
              type="checkbox"
              id="selected-product"
              className="w-5 h-5"
              checked={products.isSelected}
            />
            {products.selectedData.length} files selected
          </label>
          <button
            className="px-4 py-2 bg-slate-10"
            type="button"
            onClick={() => {
              dispatch(removeAllSelectedProducts());
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold">Gallery</h1>
      )}
    </div>
  );
};

export default ProductHeader;
