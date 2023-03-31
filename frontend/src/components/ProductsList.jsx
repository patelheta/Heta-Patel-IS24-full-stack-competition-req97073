import axios from "axios";
import Moment from "moment";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDebounce from "../hooks/useDebounce";

const ProductsList = (props) => {
  const [value, setValue] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const navigate = useNavigate();
  const term = useDebounce(value, 400);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((result) => {
        if (result) {
          setProducts(result.data);
        }
      })
      .catch((error) => {
        toast.error(`Fail to get all products`);
      });
  }, []);

  useEffect(() => {
    if (term && filterBy) {
      axios
        .get(`/api/products/search?value=${term}&filterBy=${filterBy}`)
        .then((result) => {
          if (result) {
            setProducts(result.data);
          }
        })
        .catch((error) => {
          toast.error(`Fail to get all products`);
        });
    }
  }, [term, filterBy]);

  // const onSearch = useCallback(props.onSearch, [term]);

  // useEffect(() => {
  //   onSearch(term);
  // }, [term, onSearch]);

  const handleEditClick = (e, product) => {
    e.preventDefault();
    props.setEditProduct(product);
    navigate("/editProduct");
  };

  const handleRemoveProduct = async function (e, productId, index) {
    e.preventDefault();
    return await axios
      .delete(`/api/products/${productId}`)
      .then((result) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        toast.success(`Product ${productId} deleted successfully`);
      })
      .catch((error) => {
        toast.error(`Fail to delete productId ${productId}`);
      });
  };

  return (
    <>
      <main className="container-fluid">
        <section className="table-responsive-md">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Product List</h1>
            <a type="button" className="btn btn-add " href="/newProduct">
              <i className="fa-solid fa-lg fa-plus me-2"></i>Add New Product
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div class="input-group mb-3 searchBar">
              <select
                class="form-select"
                id="selectFilterBy"
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="developer">Developer</option>
                <option value="scrumMasterName">Scrum Master</option>
              </select>
              <input
                type="text"
                className="form-control"
                aria-label="search Bar"
                spellCheck="false"
                placeholder="Search here"
                name="search"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
            <b className="p-3">Total Products:{products.length}</b>
          </div>
          <table className="table table-hover rounded-2">
            <thead>
              <tr>
                <th className="align-middle" scope="col">
                  Product Number
                </th>
                <th className="align-middle" scope="col">
                  Product Name
                </th>
                <th className="align-middle" scope="col">
                  Product Owner
                </th>
                <th className="align-middle developers" scope="col">
                  Developer Names
                </th>
                <th className="align-middle" scope="col">
                  Scrum Master
                </th>
                <th className="align-middle" scope="col">
                  Start Date
                </th>
                <th className="align-middle" scope="col">
                  Methodology
                </th>
                <th className="align-middle">Edit</th>
                <th className="align-middle">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 && (
                <div className="text-center mt-5">No Products Available</div>
              )}
              {products.length > 0 &&
                products.map((product, index) => (
                  <tr key={product.productId}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.productOwnerName}</td>
                    <td className="developers">
                      {product.Developers.join(", ")}
                    </td>
                    <td>{product.scrumMasterName}</td>
                    <td>{Moment(product.startDate).format("YYYY/MM/DD")}</td>
                    <td>{product.methodology}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-edit rounded-pill"
                        onClick={(e) => handleEditClick(e, product)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-delete rounded-pill"
                        onClick={(e) =>
                          handleRemoveProduct(e, product.productId, index)
                        }
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default ProductsList;
