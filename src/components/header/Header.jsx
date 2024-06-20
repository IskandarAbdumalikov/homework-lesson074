import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { useGetSearchProductsQuery } from "../../context/api/productApi";
import SearchModule from "../searchModule/SearchModule";

const Header = () => {
  let token = localStorage.getItem("x-auth-token");
  const [searchValue, setSearchValue] = useState(null);

  let { data } = useGetSearchProductsQuery({ search: searchValue });

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
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          <CiSearch />
        </form>
      </nav>
      {searchValue && data && (
        <SearchModule data={data} setSearchValue={setSearchValue} />
      )}
    </header>
  );
};

export default Header;
