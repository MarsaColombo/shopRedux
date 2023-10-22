import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import Product from "./Product";
import ProductForm from "./ProductForm";
const FilteredProducts = () => {
  const products = useSelector((state) => state.productsReducer);

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

export default FilteredProducts;
