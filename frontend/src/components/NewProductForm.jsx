import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const NewProductForm = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [productName, setProductName] = useState("");
  const [productOwnerName, setProductOwnerName] = useState("");
  const [developers, setDevelopers] = useState([""]);
  const [scrumMasterName, setScrumMasterName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [methodology, setMethodology] = useState("");

  const handleCreateNewProduct = async function (e) {
    e.preventDefault();

    setError("");

    const newProduct = {
      productName: productName,
      productOwnerName: productOwnerName,
      Developers: developers,
      scrumMasterName: scrumMasterName,
      startDate: startDate,
      methodology: methodology,
    };
    return await axios
      .post("/api/products", newProduct)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        setError("Failed to create new product. Please try again!");
      });
  };

  const handleDeveloperAdd = () => {
    setDevelopers([...developers, ""]);
  };

  const handleDeveloperRemove = (index) => {
    const list = [...developers];
    list.splice(index, 1);
    setDevelopers(list);
  };

  const handleDevelopersChange = (e, index) => {
    const { value } = e.target;
    const list = [...developers];
    list[index] = value;
    setDevelopers(list);
  };

  return (
    <div className="newProductForm">
      <h2>Create New Product Form</h2>
      <hr />
      {error && (
        <div className="alert alert-danger mb-4" role="alert">
          <i className="fa-solid fa-circle-exclamation me-2"></i> {error}
        </div>
      )}
      <form className="row g-3" onSubmit={handleCreateNewProduct}>
        <div className="col-md-12">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-">
          <label htmlFor="productOwner" className="form-label">
            Product Owner
          </label>
          <input
            type="text"
            className="form-control"
            id="productOwner"
            placeholder="Product Owner Name"
            onChange={(e) => setProductOwnerName(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="developer" className="form-label">
            Developer Names
          </label>
          {developers.map((developer, index) => (
            <div className="d-flex align-items-center gap-2 mb-2" key={index}>
              <input
                name="developer"
                type="text"
                className="form-control"
                id="developer"
                value={developer}
                onChange={(e) => handleDevelopersChange(e, index)}
                required
              />
              {developers.length > 1 && (
                <i
                  className="fa-regular fa-xl fa-circle-xmark"
                  onClick={() => handleDeveloperRemove(index)}
                ></i>
              )}
            </div>
          ))}
          {developers.length < 5 && (
            <button
              type="button"
              className="btn btn-primary btn-add"
              onClick={handleDeveloperAdd}
            >
              <i className="fa-solid fa-lg fa-plus me-2"></i>Add Developer
            </button>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="scrumMaster" className="form-label">
            Scrum Master
          </label>
          <input
            type="text"
            className="form-control"
            id="scrumMaster"
            placeholder="Scrum Master Name"
            onChange={(e) => setScrumMasterName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <DatePicker
            className="form-control"
            selected={startDate}
            dateFormat="yyyy/MM/dd"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="methodology" className="form-label">
            Methodology
          </label>
          <select
            id="methodology"
            className="form-select"
            onChange={(e) => setMethodology(e.target.value)}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="Agile">Agile</option>
            <option value="Waterfall">Waterfall</option>
          </select>
        </div>
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-primary btn-submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductForm;
