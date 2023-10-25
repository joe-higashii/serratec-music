import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Playlist from "./Playlist";
import Formulario from "./Formulario";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/top" element={<Playlist />} />
      <Route path="/cadastro" element={<Formulario />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
