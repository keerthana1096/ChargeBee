import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
var mountNode = document.getElementById("app");
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>  , mountNode);