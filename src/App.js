import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import ProductForm from "./components/ProductForm";
import { isEmpty } from "./components/Utils";

const App = () => {
  const products = useSelector((state) => state.productsReducer);

  return (
    <div className="App">
      <Navbar />

      <div className="productContainer">
        <div className="productsContent">
          {!isEmpty(products) &&
            products.map((product, index) => (
              <Product className="produit" product={product} key={index} />
            ))}
        </div>
      </div>
      <ProductForm />
    </div>
  );
};

export default App;
