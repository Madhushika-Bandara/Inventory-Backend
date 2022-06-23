import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const NewProduct = () => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [reorder, setReorder] = useState();

  useEffect(() => {
    addRequest();
  }, []);

  const addRequest = async () => {
    await axios
      .post("http://localhost:5000/products/", {
        name: name,
        qty: quantity,
        reOrderQty: reorder,
      })
      .then((res) => {
        window.location.reload(true);
      });
  };

  return (
    <div className="form">
      <Form onSubmit={addRequest}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicROQty">
          <Form.Label>Re Order Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Re Order Quantity"
            value={reorder}
            onChange={(e) => {
              setReorder(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Add to Inventory
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;
