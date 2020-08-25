import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  LOADING_PRODUCTS,
  LOADING_PRODUCTS_SUCCESS,
  LOADING_PRODUCTS_ERROR,
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
