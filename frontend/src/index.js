import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landin_page/Home/HomePage";
import signup from "./landin_page/signup/SignupPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/ signup" element={<signup/>}></Route>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/" element={<HomePage/>}></Route>
  </Routes>
  </BrowserRouter>
);
