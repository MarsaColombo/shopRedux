import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import ProductForm from "./components/ProductForm";
import { isEmpty } from "./components/Utils";

// Router
import { Routes, Route, BrowserRouter } from "react-router-dom";

// scss

const App = () => {
  const products = useSelector((state) => state.productsReducer);

  return (
    <div className="w-full h-full">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
