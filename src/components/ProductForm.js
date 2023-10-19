import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../redux/actions/product.action";

// SCSS
import "../styles/index.scss";

const ProductForm = () => {
  const form = useRef();
  const dispatch = useDispatch();
  // Handle form
  const handleForm = async (e) => {
    e.preventDefault();

    const productData = {
      title: form.current[0].value,
      description: form.current[1].value,
      categories: form.current[2].value,
      basePrice: form.current[3].value,
      salePrice: form.current[4].value,
      imageUrl: form.current[5].value,
    };
    await dispatch(addProduct(productData));
    dispatch(getProducts());
    form.current.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Description" />
        <input type="text" placeholder="Catégorie" />
        <input type="text" placeholder="Prix de base" />
        <input type="text" placeholder="Prix de vente" />
        <input type="file" accept="image/*" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
