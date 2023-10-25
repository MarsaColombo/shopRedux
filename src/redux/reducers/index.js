import { combineReducers } from "redux";
import { productReducer, productsReducer } from "./product.reducer";

export default combineReducers({ productsReducer, productReducer });
