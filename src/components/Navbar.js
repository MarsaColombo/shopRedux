import React from "react";
import { GiShop } from "react-icons/gi";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 flex-col justify-center items-center">
      <a href="/" class="btn btn-ghost normal-case text-xl">
        <GiShop />
      </a>
      <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box gap-4">
        <li>
          <a href="/">Homme</a>
        </li>
        <li>
          <a href="/">Femme</a>
        </li>
        <li>
          <a href="/">Chaussure</a>
        </li>
        <li>
          <a href="/">Vetements</a>
        </li>
        <li>
          <a href="/">Acessoires</a>
        </li>
        <li>
          <a href="/">Sport</a>
        </li>
        <li>
          <a href="/">Unisexe</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
