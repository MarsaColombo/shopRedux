import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import { isEmpty } from "./components/Utils";

const App = () => {
  const products = useSelector((state) => state.productsReducer);
  console.log(products);

  return (
    <div className="App">
      <Navbar />
      <PostForm />
      <div>
        {!isEmpty(products) &&
          products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
};

export default App;
