import { FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ProductView from "./ProductView";
import { SortableProductProps } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleProduct } from "../redux/productSlice";

const SortableProduct: FC<SortableProductProps> = ({
  product,
  isFirstItem,
  ...props
}) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: product.id });

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    gridRowStart: isFirstItem ? "span 2" : "",
    gridColumnStart: isFirstItem ? "span 2" : "",
    backgroundColor: "#ffffff",
    transformOrigin: "0px 0px",
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      className={`rounded-md border overflow-hidden relative card`}
      style={style}
    >
      <label
        className="absolute z-30 w-5 h-5 top-2 left-2 cursor-pointer product-checkbox"
        htmlFor={`checkbox-${product.id}`}
        style={{
          visibility: products.selectedData.includes(product.id)
            ? "visible"
            : undefined,
        }}
      >
        <input
          type="checkbox"
          id={`checkbox-${product.id}`}
          className="w-5 h-5 cursor-pointer"
          checked={products.selectedData.includes(product.id)}
          onChange={() => {
            dispatch(toggleProduct(product.id));
          }}
        />
      </label>

      <ProductView
        id={product.id}
        product={product}
        isFirstItem={isFirstItem}
        ref={setNodeRef}
        withOpacity={isDragging}
        {...props}
        {...attributes}
        {...listeners}
      />
    </div>
  );
};

export default SortableProduct;
