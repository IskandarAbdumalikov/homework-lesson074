import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import "./home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  let token = localStorage.getItem("x-auth-token");

  return (
    <Fragment>
      <Header />
      <main style={{ paddingBottom: "50px" }} className="container main">
        <h1>Welcome to my project</h1>
        <NavLink to={token ? "/admin/products" : "/login"}>Get started</NavLink>
      </main>
      <Products />

      {/* <Footer/> */}
    </Fragment>
  );
};

export default Home;
