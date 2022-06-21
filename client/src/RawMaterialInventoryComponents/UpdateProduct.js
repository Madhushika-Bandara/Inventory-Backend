import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function UpdateProduct() {
    return <div>
        <h1>Update Product</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQty">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Quantity" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Upadate
            </Button>
            </Form>
    </div>
}

export default UpdateProduct;