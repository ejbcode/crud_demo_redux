import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProductAction } from "../actions/productsActions";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const addProduct = (product) => dispatch(createNewProductAction(product));

  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product.name.trim() === "" || product.price.trim() === "") return;
    addProduct(product);
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add a new product
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Email address</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  aria-describedby="name"
                  placeholder="Product`s Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Email address</label>
                <input
                  id="price"
                  type="number"
                  className="form-control"
                  name="price"
                  aria-describedby="price"
                  placeholder="Product`s Price"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block font-weight-bold text-uppercase"
              >
                Add new product
              </button>
            </form>
            {loading ? (
              <div className="d-flex justify-content-center mt-3">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : null}

            {error ? (
              <p className="alert alert-danger p2 mt-3 text-center">
                Opps, something went wrong
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
