import React from "react";
import style from "./Header.module.css";
import logo from "../../logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
