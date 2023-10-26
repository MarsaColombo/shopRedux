import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../redux/actions/product.action";
const ProductDetails = () => {
  // Product Reducer
  // const prodId = useSelector((state) => state.filterReducer);
  const { prodId } = useParams();
  const productId = parseInt(prodId);

  const products = useSelector((state) => state.productsReducer);

  const prod = products.find((product) => product.id === productId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProduct(productId));
  }, [dispatch, productId]);

  if (!prod) {
    return <div>Loading...</div>;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex lg:flex-row">
        <img
          src={prod.imageUrl}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={prod.title}
        />
        <div className="px-4 md:text-center">
          <h1 className="text-5xl font-bold underline">{prod.title}</h1>
          <h3 className="py-6 font-semibold">{prod.description}</h3>
          <h6 className="py-6 font-medium">{prod.categories}</h6>
          <div className="py-6 flex justify-around items-center">
            <p className=" font-medium text-lg">Prix :</p>
            <p className=" font-light">
              {" "}
              <s>{prod.basePrice} &euro;</s>
            </p>
            <p className=" font-bold text-xl">{prod.salePrice} &euro;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
