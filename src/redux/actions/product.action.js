import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const SINGLE_PRODUCT = "SINGLE_PRODUCT";

export const getProducts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/products").then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/products", data).then((res) => {
      dispatch({ type: ADD_PRODUCT, payload: data });
    });
  };
};

export const editProduct = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/products/${data.id}`, data)
      .then((res) => {
        dispatch({ type: EDIT_PRODUCT, payload: res.data });
      });
  };
};
export const deleteProduct = (postId) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3000/products/${postId}`)
      .then((res) => {
        dispatch({ type: DELETE_PRODUCT, payload: postId });
      });
  };
};
export const filterProducts = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_PRODUCTS, payload: data });
  };
};

export const singleProduct = (productId) => {
  return (dispatch) => {
    return dispatch({ type: SINGLE_PRODUCT, payload: productId });
  };
};
