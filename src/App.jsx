import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Products from "./components/products/Products";
import CreateProducts from './components/createProducts/CreateProducts'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="products" element={<Products />} />
          <Route path="createProducts" element={<CreateProducts />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
};

export default App;
