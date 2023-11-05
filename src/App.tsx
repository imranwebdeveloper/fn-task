import { Provider } from "react-redux";
import ProductsGallery from "./components/ProductsGallery";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto min-h-screen flex items-center ">
        <ProductsGallery />
      </div>
    </Provider>
  );
};

export default App;
