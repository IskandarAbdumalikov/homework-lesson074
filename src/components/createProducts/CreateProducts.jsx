import React, { useState } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useCreateProductMutation } from "../../context/api/productApi";
import Localmages from "./Localmages";
import "./createProduct.scss";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const CreateProducts = () => {
  const { formData, handleChange } = useGetValue(initialState);
  const [files, setFiles] = useState("");
  const navigate = useNavigate();
  const [createProduct, { data, isLoading, isSuccess }] =
    useCreateProductMutation();

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify([formData.info]));
    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
    navigate("/admin/products");
  };
  return (
    <form
      className="create__form container"
      onSubmit={handleCreateProduct}
      action=""
    >
      <h2>Create product</h2>
      <input
        required
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
        name="title"
        type="text"
      />
      <input
        value={formData.price}
        onChange={handleChange}
        placeholder="price"
        name="price"
        type="number"
      />
      <input
        required
        value={formData.oldPrice}
        onChange={handleChange}
        placeholder="oldPrice"
        name="oldPrice"
        type="number"
      />
      <input
        required
        value={formData.category}
        onChange={handleChange}
        placeholder="category"
        name="category"
        type="text"
      />
      <input
        required
        value={formData.units}
        onChange={handleChange}
        placeholder="units"
        name="units"
        type="text"
      />
      <input
        required
        value={formData.description}
        onChange={handleChange}
        placeholder="description"
        name="description"
        type="text"
      />
      <input
        required
        value={formData.info}
        onChange={handleChange}
        placeholder="info"
        name="info"
        type="text"
      />
      <div>
        <input
          required
          onChange={(e) => setFiles(e.target.files)}
          multiple={true}
          accept="image/*"
          type="file"
        />
        <br />
        <Localmages files={files} />
      </div>
      <button className={isLoading ? "loading-btn" : ""} disabled={isLoading}>
        {isLoading ? "Loading..." : "create"}
      </button>
    </form>
  );
};

export default CreateProducts;
