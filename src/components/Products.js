import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingProductsActions } from "../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = () => dispatch(loadingProductsActions);
    loadProducts();
  }, []);

  return (
    <>
      <h2 className="text-center my-5">List of products</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Products;
