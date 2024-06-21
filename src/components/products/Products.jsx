import React, { useState } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import "./products.scss";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const Products = () => {
  const [offset, setOffset] = useState(1);
  let { data, isLoading, isSuccess } = useGetProductsQuery({
    limit: 6 * offset,
  });
  return (
    <div className="products container">
      <div className="products__wrapper">
        {data?.data?.products?.map((product) => (
          <div key={product.id} className="products__card">
            <Link to={`/products/${product.id}`}>
              <img
                src={
                  product.urls.length
                    ? product.urls[0]
                    : `https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg`
                }
                alt=""
              />
            </Link>
            <div className="products__card__info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="price">
                <h3>${product.price}</h3>
                {product.oldPrice ? <p>${product.oldPrice}</p> : <></>}
              </div>
            </div>
          </div>
        )).reverse()}
      </div>
      {isLoading ? <Loading /> : <></>}
      <button className="see-more-btn" onClick={() => setOffset((p) => p + 1)}>
        {isLoading ? "loading..." : "See more"}
      </button>
    </div>
  );
};

export default Products;
