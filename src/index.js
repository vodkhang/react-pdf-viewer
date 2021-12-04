import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import pdfjs from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = "https://d2v5g.csb.app/pdf.worker.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
