import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getProductDeleteActions,
  getProductEditActions,
} from "../actions/productsActions";

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(getProductDeleteActions(id));
      }
    });
  };
  const redirect = (product) => {
    dispatch(getProductEditActions(product));
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>
        {" "}
        <span className="font-weight-bold">${product.price}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redirect(product)}
        >
          Edit
        </button>
        <button
          onClick={() => confirmDelete(product.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
