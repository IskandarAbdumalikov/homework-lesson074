import React from "react";
import "./searchModule.scss";
import { Link } from "react-router-dom";

const SearchModule = ({ data, setSearchValue }) => {
  let productData = data?.data?.products;

  return (
    <div className="search__module__wrapper">
      {productData?.map((product) => (
        <Link
          to={`/products/${product.id}`}
          className="search__card"
          key={product.id}
          onClick={() => setSearchValue(``)}
        >
          <img width={30} src={product.urls[0]} alt={product.title} />

          <h1>{product.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default SearchModule;
