export interface Product {
  id: string;
  img: string;
}

export type SortableProductProps = {
  product: Product;
  isFirstItem?: boolean;
};
