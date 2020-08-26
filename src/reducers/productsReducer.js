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

const initialState = {
  products: [],
  error: false,
  loading: false,
  productDelete: null,
  productEdit: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };

    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      };

    case LOADING_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };

    case LOADING_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_PRODUCT_GET:
      return {
        ...state,
        productDelete: action.payload,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== state.productDelete
        ),
        productDelete: null,
      };

    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case EDIT_PRODUCT_GET:
      return {
        ...state,
        productEdit: action.payload,
      };

    case EDIT_PRODUCT_START:
      return {
        ...state,
      };
    default:
      return state;
  }
}
