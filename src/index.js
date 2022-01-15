import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormInput from "./components/FormInput";
import "./index.css";

render(
  <Router>
    <FormInput />
  </Router>,
  document.getElementById("app")
);
