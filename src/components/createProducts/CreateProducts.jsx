import React, { useState } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useCreateProductMutation } from "../../context/api/productApi";
import Localmages from "./Localmages";
import "./createProduct.scss";

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
  const [createProduct, { data, isLoading ,isSuccess}] = useCreateProductMutation();

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
    if (isSuccess) {
      createProduct('')
    }
  };
  return (
    <form
      className="create__form container"
      onSubmit={handleCreateProduct}
      action=""
    >
      <h2>Create product</h2>
      <input
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
        value={formData.oldPrice}
        onChange={handleChange}
        placeholder="oldPrice"
        name="oldPrice"
        type="number"
      />
      <input
        value={formData.category}
        onChange={handleChange}
        placeholder="category"
        name="category"
        type="text"
      />
      <input
        value={formData.units}
        onChange={handleChange}
        placeholder="units"
        name="units"
        type="text"
      />
      <input
        value={formData.description}
        onChange={handleChange}
        placeholder="description"
        name="description"
        type="text"
      />
      <input
        value={formData.info}
        onChange={handleChange}
        placeholder="info"
        name="info"
        type="text"
      />
      <div>
        <input
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
