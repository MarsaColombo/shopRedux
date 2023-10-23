import React from "react";
import { GiShop } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/actions/product.action";
import { Link } from "react-router-dom";
import { useState } from "react";
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
// Dropdown

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100 flex-col justify-center items-center">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        <GiShop />
      </a>
      <div className="menu menu-vertical md:menu-horizontal bg-base-200 rounded-box gap-4">
      <label tabindex="0" class="btn btn-ghost btn-circle" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      {isOpen && (<>
        {buttons.map((button, index) => {
          return (
            <div key={index} class="">
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
        </>)}
      </div>
    </div>
  );
};

export default Navbar;
