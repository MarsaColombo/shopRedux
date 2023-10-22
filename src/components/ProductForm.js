import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../redux/actions/product.action";

// SCSS

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
    <div className="h-full w-full p-5">
      <form
        ref={form}
        onSubmit={(e) => handleForm(e)}
        className=" w-full flex flex-col justify-center items-center gap-4 m-auto"
      >
        <input
          type="text"
          class="input input-bordered w-full max-w-xs"
          placeholder="Titre du poste"
        />
        <textarea
          class="textarea textarea-bordered"
          placeholder="Description"
        />
        <input
          class="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Catégorie"
        />
        <input
          class="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Prix de base"
        />
        <input
          class="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Prix de vente"
        />
        <input
          class="file-input file-input-bordered w-full max-w-xs"
          type="file"
          accept="image/*"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
