import React, { useEffect } from "react";
import "./singleProducts.scss";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../context/api/productApi";
import Header from "../../components/header/Header";

const SingleProduct = () => {
  let { productId } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productId);
  let product = data?.data;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (isLoading) {
    return (
      <div style={{ marginTop: "150px" }} className="single__loading container">
        <div className="single__loading__img bg__animation"></div>
        <div className="single__loading__info">
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="single__item container">
        <div className="single__card">
          <div className="single__card__left">
            <img
              src={
                product.urls.length
                  ? product.urls[0]
                  : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }
              alt={product.title}
            />
          </div>
          <div className="single__card__right">
            <h1 style={{ fontSize: "30px" }}>{product.title}</h1>
            <h3>{product.description}</h3>
            <p>Category : {product.category}</p>
            <p>Brand : {product.brand}</p>
            <p>Price : {product.price}$</p>
            <div className="single__btns">
              <button>Buy</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
