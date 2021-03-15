import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
// import App from "./App";
import Table from "./containers/Table";
import registerServiceWorker from "./registerServiceWorker";
import CreateTodo from "./containers/CreateTodo";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)(MainReducer);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById("root")

  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
