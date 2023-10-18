import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
    <Card component="div" className="card">
      <div className="edit-delete">
        <DeleteIcon className="button" onClick={() => dispatch(deleteProduct(product.id))} />
        <BuildOutlinedIcon className="button" onClick={() => setEditToogle(!editToggle)} />
      </div>

      <CardMedia
        className="cardMedia"
        component="img"
        image={product.imageUrl}
        alt=""
      />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            autoFocus={true}
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          ></textarea>
          <textarea
            autoFocus={true}
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
          <textarea
            autoFocus={true}
            value={editCategories}
            onChange={(e) => setEditCategories(e.target.value)}
          ></textarea>
          <textarea
            autoFocus={true}
            value={editBasePrice}
            onChange={(e) => setEditBasePrice(e.target.value)}
          ></textarea>
          <textarea
            autoFocus={true}
            value={editSalePrice}
            onChange={(e) => setEditSalePrice(e.target.value)}
          ></textarea>

          <input
            type="file"
            accept="image/*"
            autoFocus={true}
            onChange={(e) => setEditImageUrl(e.target.value)}
          />
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <CardContent className="CardContent">
          <Typography className="title" gutterBottom>
            {product.title}
          </Typography>
          <Typography component="h3">{product.description}</Typography>
          <Typography component="p">{product.categories}</Typography>
          <Typography component="p"> {product.basePrice}</Typography>
          <Typography component="p">{product.salePrice}</Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default Product;
