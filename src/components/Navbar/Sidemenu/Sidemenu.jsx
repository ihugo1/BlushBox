import React from "react";
import style from "./Sidemenu.module.css";
import { FaXmark } from "react-icons/fa6";

export const Sidemenu = ({ sideMenu, toggleMenu }) => {
  return (
    <ul
      className={`${style["side-menu"]} ${
        sideMenu ? style["side-menu-active"] : ""
      }`}
    >
      <a className={style["side-link"]}>Products</a>
      <a className={style["side-link"]}>About</a>
      <a className={style["side-link"]}>Login</a>
      <button className={style["toggle-button"]} onClick={toggleMenu}>
        <FaXmark />
      </button>
    </ul>
  );
};
