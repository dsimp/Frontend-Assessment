import React from "react";
import { render } from "react-dom";
import FormInput from "./components/FormInput";
import "./index.css";

render(
  <div className="container-1">
    <FormInput />
  </div>,
  document.getElementById("app")
);
