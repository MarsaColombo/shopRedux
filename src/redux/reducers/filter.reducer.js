import { FILTER_PRODUCTS, SINGLE_PRODUCT } from "../actions/product.action";
const initialState = [];

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return action.payload;
    case SINGLE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
