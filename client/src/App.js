import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./RawMaterialInventoryComponents/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./RawMaterialInventoryComponents/CreateProduct";
import Product from "./RawMaterialInventoryComponents/Products";
import EditProduct from "./RawMaterialInventoryComponents/EditProduct";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/add" element={<CreateProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
