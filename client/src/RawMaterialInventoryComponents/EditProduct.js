import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [reorder, setReorder] = useState();
  const id = useParams().id;

  useEffect(() => {
    getData(id);
  }, []);
  const updateRequest = async () => {
    await axios
      .patch(`http://localhost:5000/products/${id}`, {
        name: name,
        qty: quantity,
        reOrderQty: reorder,
      })
      .then((res) => {
        window.location.reload(true);
      });
  };
  const getData = async (id) => {
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      setName(res.data.name);
      setQuantity(res.data.qty);
      setReorder(res.data.reOrderQty);
    });
  };
  return (
    <Form onSubmit={updateRequest}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Qty"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ROQ</Form.Label>
        <Form.Control
          type="text"
          placeholder="roq"
          value={reorder}
          onChange={(e) => {
            setReorder(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default EditProduct;
