import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import ProductForm from "./components/ProductForm";
import { isEmpty } from "./components/Utils";
import FilteredProducts from "./components/FilteredProducts";

// Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
// Redux

const App = () => {
  const products = useSelector((state) => state.productsReducer);
  const mainPage = () => {
    return (
      <>
        <div className="flex justify-center items-center w-auto m-auto ">
          <div className=" grid grid-cols-2 justify-items-center gap-5">
            {!isEmpty(products) &&
              products.map((product, index) => (
                <Product product={product} key={index} />
              ))}
          </div>
        </div>
        <ProductForm className="h-screen w-screen" />
      </>
    );
  };

  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <Navbar />

        <Routes>
          <Route path="/" element={mainPage()} />
          <Route
            path="/filteredProducts/:category"
            element={<FilteredProducts categories={"categories"} />}
          />
          <Route path="/product/:prodId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
