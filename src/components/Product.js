import React from "react";
// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Product = (product) => {
  const cards = (
    <Card className="card">
      <div className="edit-delete">
        <img src="./icons/edit.svg" alt="edit" />
        <img src="./icons/delete.svg" alt="delete" />
      </div>
      <CardMedia
        className="cardMedia"
        component="img"
        height="20px"
        image={product.imageUrl}
        alt="Paella dish"
      />
      <CardContent className="CardContent">
        <Typography className="title" gutterBottom>
          {product.title}
        </Typography>
        <Typography component="h3">{product.description}</Typography>
        <Typography component="p">{product.categories}</Typography>
        <Typography component="p"> {product.basePrice}</Typography>
        <Typography component="p">{product.salePrice} </Typography>
      </CardContent>
    </Card>
  );

  return (
    <div id="hero">
      <h1>Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
