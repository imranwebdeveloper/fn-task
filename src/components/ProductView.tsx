import { forwardRef, HTMLAttributes, CSSProperties } from "react";
import { Product } from "../types";

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string | number;
  withOpacity?: boolean;
  isDragging?: boolean;
  isFirstItem?: boolean;
  product?: Product;
};

const ProductView = forwardRef<HTMLDivElement, ItemProps>(
  ({ isDragging, product, style, isFirstItem, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      cursor: isDragging ? "grabbing" : "grab",
      height: isFirstItem ? 300 : 150,
      ...style,
    };

    return (
      <div ref={ref} style={inlineStyles} {...props} className="card-section ">
        <img src={product?.img} className="w-full h-full" />
        <div className="card-overlay rounded-md "></div>
      </div>
    );
  }
);

export default ProductView;
