//import React from "react";
import axios from "axios";

const DeleteProduct = (id, e) => {
  e.preventDefault();

  if (window.confirm("Are you sure you want to delete this entry?")) {
    axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
      window.location.reload(true);
    });
  }
};

export default DeleteProduct;
