import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  // Product Reducer
  const prodId = useSelector((state) => state.filterReducer);
  const products = useSelector((state) => state.productsReducer);
  const product = products.find((product) => product.id === prodId);
  console.log(product);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex lg:flex-row">
        <img
          src={product.imageUrl}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={product.title}
        />
        <div className="px-4 md:text-center">
          <h1 className="text-5xl font-bold underline">{product.title}</h1>
          <h3 className="py-6 font-semibold">{product.description}</h3>
          <h6 className="py-6 font-medium">{product.categories}</h6>
          <div className="py-6 flex justify-around items-center">
            <p className=" font-medium text-lg">Prix :</p>
            <p className=" font-light">
              {" "}
              <s>{product.basePrice} &euro;</s>
            </p>
            <p className=" font-bold text-xl">{product.salePrice} &euro;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
