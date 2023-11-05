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
  ({ isDragging, style, isFirstItem, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: isDragging ? "0.5" : "1",
      cursor: isDragging ? "grabbing" : "grab",
      height: isFirstItem ? 300 : 150,
      ...style,
    };

    return (
      <div ref={ref} style={inlineStyles} {...props} className="card-section">
        <div className="card-overlay rounded-md transition-all "></div>
      </div>
    );
  }
);

export default ProductView;
