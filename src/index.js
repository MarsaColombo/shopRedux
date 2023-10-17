import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// SASS
import "./styles/index.scss";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/index";
import { getProducts } from "./redux/actions/product.action";

const store = configureStore({
  reducer: {
    reducer: rootReducer,
    devTools: true,
  },
});

const root = document.getElementById("root");

store.dispatch(getProducts());

const appRoot = createRoot(root);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
