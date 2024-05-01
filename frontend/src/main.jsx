import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
// import store from "./Store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
