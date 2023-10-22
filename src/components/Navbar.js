import React from "react";
import { GiShop } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/actions/product.action";
import { Link } from "react-router-dom";
const Navbar = () => {
  const buttons = [
    "Homme",
    "Femme",
    "Chaussures",
    "Vêtements",
    "Accessoires",
    "Sport",
    "Unisexe",
  ];
  const dispatch = useDispatch();

  const handleButtonClick = (button) => {
    dispatch(filterProducts(button));
  };

  return (
    <div className="navbar bg-base-100 flex-col justify-center items-center">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        <GiShop />
      </a>
      <div className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box gap-4">
        {buttons.map((button, index) => {
          return (
            <div key={index}>
              <Link to={"/filteredProducts/" + button}>
                <button
                  class="btn btn-active btn-neutral"
                  onClick={() => handleButtonClick(button)}
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
