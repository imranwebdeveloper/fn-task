import {
  DndContext,
  closestCenter,
  DragEndEvent,
  useSensor,
  MouseSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import { useSelector, useDispatch } from "react-redux";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import ProductHeader from "./ProductHeader";
import { RootState } from "../redux/store";
import { moveSelectedProduct } from "../redux/productSlice";
import SortableProduct from "./SortableProduct";
import FileUploadButton from "./FileUploadButton";

const ProductsGallery = () => {
  const products = useSelector((state: RootState) => state.products.data);
  const dispatch = useDispatch();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over) {
      const oldIndex = products.findIndex((item) => item.id === active.id);
      const newIndex = products.findIndex((item) => item.id === over?.id);
      const newData = arrayMove(products, oldIndex, newIndex);
      dispatch(moveSelectedProduct(newData));
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={products} strategy={rectSortingStrategy}>
        <div className="bg-white border max-w-5xl mx-auto flex-1 rounded-md border-spacing-2 gallery">
          <ProductHeader />
          <div className=" gap-3 p-8  grid grid-cols-5 ">
            {products.map((product, i) => (
              <SortableProduct
                key={product.id}
                product={product}
                isFirstItem={i === 0 ? true : false}
              />
            ))}
            <FileUploadButton />
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ProductsGallery;
