import React from "react";
import style from "./Navbar.module.css";
import {NavbarLogo, NavbarLinks} from "./NavbarComponents"

export const Navbar = () => {
  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-left"]}>
        <NavbarLogo />
      </div>
      <div className={style["navbar-right"]}>
        <NavbarLinks />
      </div>
    </nav>
  );
};
