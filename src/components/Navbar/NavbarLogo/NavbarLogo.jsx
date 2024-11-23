import React from "react";
import style from "./NavbarLogo.module.css";

export const NavbarLogo = () => {
  return (
    <div className={style["logo"]}>
      <div className={style["part-a"]}>Blush</div>
      <div className={style["part-b"]}>Box</div>
    </div>
  );
};
