import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const EditProductForm = (props) => {
  const navigate = useNavigate();
  const product = props.product;
  const [error, setError] = useState("");
  const [productName, setProductName] = useState(product.productName || "");
  const [productOwnerName, setProductOwnerName] = useState(
    product.productOwnerName || ""
  );
  const [developers, setDevelopers] = useState(product.Developers || [""]);
  const [scrumMasterName, setScrumMasterName] = useState(
    product.scrumMasterName || ""
  );
  const [startDate, setStartDate] = useState(
    new Date(product.startDate) || new Date()
  );
  const [methodology, setMethodology] = useState(product.methodology || "");

  const handleUpdateProduct = async function (e) {
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
      .put(`/api/products/${product.productId}`, newProduct)
      .then((result) => {
        navigate("/");
        toast.success(`Product ${product.productId} updated successfully`);
      })
      .catch((error) => {
        setError("Failed to update product. Please try again!");
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
    <>
      {product && (
        <div className="newProductForm">
          <h2>Update Product Form</h2>
          <hr />
          {error && (
            <div className="alert alert-danger mb-4" role="alert">
              <i className="fa-solid fa-circle-exclamation me-2"></i> {error}
            </div>
          )}
          <form className="row g-3" onSubmit={handleUpdateProduct}>
            <div className="col-md-12">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Product Name"
                value={productName}
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
                value={productOwnerName}
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
                <div
                  className="d-flex align-items-center gap-2 mb-2"
                  key={index}
                >
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
                value={scrumMasterName}
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
                value={methodology}
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
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProductForm;
