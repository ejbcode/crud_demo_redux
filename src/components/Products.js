import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingProductsActions } from "../actions/productsActions";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);
  console.log(error);
  useEffect(() => {
    const loadProducts = () => dispatch(loadingProductsActions());
    loadProducts();
  }, []);

  return (
    <>
      {error && (
        <p className="col-12 alert alert-danger block p2 mt-3 text-center">
          Opps, something went wrong
        </p>
      )}
      <h2 className="text-center my-5">List of products</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <p>No products</p>
          ) : (
            products.map((product) => <Product key={product.id} {...product} />)
          )}
        </tbody>
      </table>
      {loading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
