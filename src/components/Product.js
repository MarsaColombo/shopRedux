import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// MUI

import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

// Redux
import {
  deleteProduct,
  editProduct,
  getProducts,
} from "../redux/actions/product.action";
import { getDetails } from "../redux/actions/product.action";

// Router
import { Link } from "react-router-dom";

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
    dispatch(getProducts());
    setEditToogle(false);
  };

  return (
    <div className=" card h-auto  w-[20rem] sm:w-[15rem] bg-base-100 shadow-xl p-4 border-2">
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
          className="h-full flex flex-col justify-around text-center content-center items-center "
        >
          <textarea
            autoFocus={true}
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="h-6"
          ></textarea>
          <textarea
            className="textarea h-6"
            autoFocus={true}
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
          <textarea
            className="textarea h-6"
            autoFocus={true}
            value={editCategories}
            onChange={(e) => setEditCategories(e.target.value)}
          ></textarea>
          <textarea
            className="textarea h-6"
            autoFocus={true}
            value={editBasePrice}
            onChange={(e) => setEditBasePrice(e.target.value)}
          ></textarea>
          <textarea
            className="textarea h-6"
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
          <input className="btn" type="submit" value="Valider modification" />
        </form>
      ) : (
        <CardContent className="card-body h-[10rem] flex justify-around items-center text-center  font-light text-xs my-5">
          <h1 className="card-title">{product.title}</h1>
          <h3 className="font-bold">{product.description}</h3>
          <h6 className="font-semibold">{product.categories}</h6>
          <span className=" ">
            <s> {product.basePrice} </s>
          </span>
          <span>{product.salePrice}</span>
          <div className="mt-5">
            <Link to={`/product/${product.id}`}>
              <button
                className="btn  "
                onClick={() => dispatch(getDetails(product.id))}
              >
                Voir
              </button>
            </Link>
          </div>
        </CardContent>
      )}
    </div>
  );
};

export default Product;
