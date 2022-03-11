import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Layout>
        <App />
      </Layout>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
