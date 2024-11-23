import React from "react";
import style from "./NavbarLinks.module.css";
import { FaCartShopping } from "react-icons/fa6";

export const NavbarLinks = () => {
  return (
    <ul className={style["navbar-links"]}>
      <a className={style["navbar-link"]}>Products</a>
      <a className={style["navbar-link"]}>About</a>
      <a className={style["navbar-link"]}>Login</a>
      <a className={style["navbar-link"]}>
        <FaCartShopping className={style['icon']}/>
      </a>
    </ul>
  );
};
