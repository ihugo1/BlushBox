import React, { useState } from "react";
import style from "./Navbar.module.css";
import { NavbarLogo, NavbarLinks, Sidemenu } from "./NavbarComponents";

export const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const toggleMenu = () => setSideMenu(!sideMenu);

  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-left"]}>
        <NavbarLogo />
      </div>
      <div className={style["navbar-right"]}>
        <NavbarLinks toggleMenu={toggleMenu} />
        <Sidemenu sideMenu={sideMenu} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};
