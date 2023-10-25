import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  DELETE_PRODUCT,
  FILTER_PRODUCTS,
  GET_DETAILS,
} from "../actions/product.action";
const initialState = {
  products: [],
  product: [],
};

export function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [action.payload, ...state];
    case EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            title: action.payload.title,
          };
        } else {
          return product;
        }
      });
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case FILTER_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

export function productReducer(state = initialState.product, action) {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
