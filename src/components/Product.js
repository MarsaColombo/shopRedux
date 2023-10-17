import React from "react";
import { useState, useEffect } from "react";
// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const Product = ({ product }) => {
  // Edit toogle
  const [editToogle, setEditToogle] = useState(false);

  return (
    <Card className="card">
      <div className="edit-delete">
        <DeleteIcon />
        <BuildOutlinedIcon />
      </div>
      <CardMedia
        className="cardMedia"
        component="img"
        height="20px"
        image={product.imageUrl}
        alt=""
      />
      <CardContent className="CardContent">
        <Typography className="title" gutterBottom>
          {product.title}
        </Typography>
        <Typography component="h3">{product.description}</Typography>
        <Typography component="p">{product.categories}</Typography>
        <Typography component="p"> {product.basePrice}</Typography>
        <Typography component="p">{product.salePrice}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
