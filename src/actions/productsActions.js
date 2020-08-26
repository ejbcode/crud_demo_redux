import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  LOADING_PRODUCTS,
  LOADING_PRODUCTS_SUCCESS,
  LOADING_PRODUCTS_ERROR,
  DELETE_PRODUCT_GET,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT_GET,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      await axiosClient.post("/products", product);

      dispatch(addProductSucess(product));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      dispatch(addProductError(true));
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Opps, something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSucess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

export function loadingProductsActions(product) {
  return async (dispatch) => {
    dispatch(loadProducts());
    try {
      const response = await axiosClient.get("/products");
      dispatch(loadProductsSuccess(response.data));
    } catch (error) {
      dispatch(loadProductsError(true));
    }
  };
}

const loadProducts = () => ({
  type: LOADING_PRODUCTS,
  payload: true,
});

const loadProductsSuccess = (products) => ({
  type: LOADING_PRODUCTS_SUCCESS,
  payload: products,
});

const loadProductsError = (state) => ({
  type: LOADING_PRODUCTS_ERROR,
  payload: state,
});

export function getProductDeleteActions(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));
    try {
      await axiosClient.delete(`/products/${id}`);
      dispatch(productDeleteSuccess());
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {
      dispatch(productDeleteError());
    }
  };
}
const getProductDelete = (id) => ({
  type: DELETE_PRODUCT_GET,
  payload: id,
});

const productDeleteSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const productDeleteError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

export function getProductEditActions(product) {
  console.log("w");
  return async (dispatch) => {
    dispatch(getProductEdit(product));
  };
}

const getProductEdit = (product) => ({
  type: EDIT_PRODUCT_GET,
  payload: product,
});

export function getProductEditStartAction(product) {
  return async (dispatch) => {
    dispatch(getProductEditStart(product));
    try {
      const response = await axiosClient.put(
        `/products/${product.id}`,
        product
      );
      console.log(response.data);
    } catch (error) {}
  };
}

const getProductEditStart = (product) => ({
  type: EDIT_PRODUCT_START,
  payload: product,
});
