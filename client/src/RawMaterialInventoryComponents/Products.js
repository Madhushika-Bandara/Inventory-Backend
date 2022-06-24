import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
const Product = () => {
  // const [name ,setName] =useState()
  // const [quantity,setQuantity] =useState()
  // const [reorder,setReorder]= useState()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getRequest();
  }, []);
  const getRequest = async () => {
    await axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log(res.data);
        // setName(res.data.name)
        // setQuantity(res.data.qty)
        // setReorder(res.data.reOrderQty)
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Re Order Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.reOrderQty}</td>

              <Link to={`/edit/${item._id}`}>
                <td>
                  <Button variant="secondary">Edit</Button>
                </td>
              </Link>

              <td>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    DeleteProduct(item._id, e);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
