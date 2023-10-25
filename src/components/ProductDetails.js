import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  // Product Reducer
  const product = useSelector((state) => state.productReducer);

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex lg:flex-row">
        <img
          src={product.imageUrl}
          class="max-w-sm rounded-lg shadow-2xl"
          alt={product.title}
        />
        <div className="px-4">
          <h1 class="text-5xl font-bold underline">{product.title}</h1>
          <h3 class="py-6 font-semibold">{product.description}</h3>
          <h6 class="py-6 font-medium">{product.categories}</h6>
          <div className="py-6 flex justify-around items-center">
            <p class=" font-medium text-lg">Prix :</p>
            <p class=" font-light">
              {" "}
              <s>{product.basePrice} &euro;</s>
            </p>
            <p class=" font-bold text-xl">{product.salePrice} &euro;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
