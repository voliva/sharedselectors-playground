import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SupportForm from "./components/SupportForm";
import CompanyList from "./components/CompanyList";
import store from "./store";

import "./styles.css";

const App = () => (
  <div className="App">
    <CompanyList />
    <SupportForm />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
