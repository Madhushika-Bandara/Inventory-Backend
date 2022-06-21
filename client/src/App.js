import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./RawMaterialInventoryComponents/NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./RawMaterialInventoryComponents/Dashboard";
import CreateProduct from "./RawMaterialInventoryComponents/CreateProduct";
import UpdateProduct from "./RawMaterialInventoryComponents/UpdateProduct";

function App() {
  
   return(
    <Router>
      <NavBar/>

    <Routes>
      <Route path = "/" />
      <Route path = "/" />
      <Route path = "/dashboard" element={<Dashboard/>}/>
      <Route path = "/add" element={<CreateProduct/>}/>
      <Route path = "/update" element={<UpdateProduct/>}/>
      
    </Routes>
   
   </Router>

   
   );
   

}

export default App;
