import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  let token = localStorage.getItem("x-auth-token");
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav__logo">
          <Link to={"/"}>LOGO</Link>
        </div>
        <ul className="header__nav__list">
          <NavLink to={"/"}>Home</NavLink>
          {token ? (
            <NavLink to={"/admin/products"}>Admin</NavLink>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </ul>
        <form action="" className="header__nav__search__form">
          <input placeholder="Search" type="text" name="" id="" />
          <CiSearch />
        </form>
      </nav>
    </header>
  );
};

export default Header;
