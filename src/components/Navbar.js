import React from "react";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <StoreIcon />
        </li>
        <li>
          <ShoppingBasketIcon />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
