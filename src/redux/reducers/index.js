import { combineReducers } from "redux";
import { productsReducer } from "./product.reducer";
import { filterReducer } from "./filter.reducer";

export default combineReducers({ productsReducer, filterReducer });
