import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// MUI

import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { deleteProduct, editProduct } from "../redux/actions/product.action";

const Product = ({ product }) => {
  // Edit toogle
  const [editToggle, setEditToogle] = useState(false);

  // Edit parameters
  const [editTitle, setEditTitle] = useState(product.title);
  const [editDescription, setEditDescription] = useState(product.description);
  const [editCategories, setEditCategories] = useState(product.categories);
  const [editBasePrice, setEditBasePrice] = useState(product.basePrice);
  const [editSalePrice, setEditSalePrice] = useState(product.salePrice);
  const [editImageUrl, setEditImageUrl] = useState(product.imageUrl);

  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const productData = {
      title: editTitle,
      description: editDescription,
      categories: editCategories,
      basePrice: editBasePrice,
      salePrice: editSalePrice,
      imageUrl: editImageUrl,
      id: product.id,
    };
    dispatch(editProduct(productData));
    setEditToogle(false);
  };

  return (
    <div className=" card h-auto  w-[20rem] sm:w-[15rem] bg-base-100 shadow-xl p-5 border-2">
      <div className="btn-group flex justify-around items-center my-2">
        <DeleteIcon
          className="glass rounded-lg "
          onClick={() => dispatch(deleteProduct(product.id))}
        />
        <BuildOutlinedIcon
          className="glass rounded-lg"
          onClick={() => setEditToogle(!editToggle)}
        />
      </div>

      <CardMedia
        className="h-1/3 sm:h-1/6 w-1/4 sm:w-1/6 rounded-lg"
        component="img"
        image={product.imageUrl}
        alt=""
      />

      {editToggle ? (
        <form
          onSubmit={(e) => handleEdit(e)}
          className="h-3/4 flex flex-col justify-around text-center content-center items-center gap-2"
        >
          <textarea
            autoFocus={true}
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          ></textarea>
          <textarea
            className="textarea"
            autoFocus={true}
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
          <textarea
            className="textarea"
            autoFocus={true}
            value={editCategories}
            onChange={(e) => setEditCategories(e.target.value)}
          ></textarea>
          <textarea
            className="textarea"
            autoFocus={true}
            value={editBasePrice}
            onChange={(e) => setEditBasePrice(e.target.value)}
          ></textarea>
          <textarea
            className="textarea"
            autoFocus={true}
            value={editSalePrice}
            onChange={(e) => setEditSalePrice(e.target.value)}
          ></textarea>

          <input
            className="file-input w-full max-w-xs"
            type="file"
            accept="image/*"
            autoFocus={true}
            onChange={(e) => setEditImageUrl(e.target.value)}
          />
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <CardContent className="card-body items-center text-center h-12 font-light text-xs">
          <p className="card-title">{product.title}</p>
          <p>{product.description}</p>
          <p>{product.categories}</p>
          <p> {product.basePrice}</p>
          <p>{product.salePrice}</p>
        </CardContent>
      )}
    </div>
  );
};

export default Product;
