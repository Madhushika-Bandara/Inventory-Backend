import React from "react";
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState, createRef } from 'react';


// function CreateProduct () {

//     let intialValue = [];
//     const [products, setProduct ]=useState(intialValue);
//     const formData = createRef();

//     const add = (event) =>{
//         event.preventDefault();
//         // console.log(event.target.productName.value);
//         //const formData = event.target;
//         // const newProduct = {
//         //     productName : formData.productName.value,
//         //     price : formData.price.value,
//         //     qty : formData.qty.value

//         // }
//         // console.log(formData.current)
//         const newProduct = {
//             productName : formData.current.productName.value,
//             qty :formData.current.qty.value,
//             reOrderQty:formData.current.reOrderQty.value


//         }
//         // console.log(newProduct);
//         // add a new product entry to products array
//         setProduct([...products,newProduct]);
//         console.log(products);
//     }

//     return <div>
//         <h1>Create Product</h1>

//         <Form onSubmit={add} ref={formData} >
//             <Form.Group className="mb-3" controlId="formBasicName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter name" name='productName'/>
//                 </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicQty">
//                 <Form.Label>Quantity</Form.Label>
//                 <Form.Control type="number" placeholder="Quantity" name= 'qty'/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicReOrderQuantity">
//                 <Form.Label>Re Order Quantity</Form.Label>
//                 <Form.Control type="number" placeholder="Re Order Quantity" name= 'reOrderQty'/>
//             </Form.Group>
//             <Button variant="primary" type="submit" >
//                 Add to Inventory
//             </Button>
//             </Form>
            
//     </div>
// }
 
// export default CreateProduct;


import { Form, Button, Table, Container } from "react-bootstrap";
import { createRef, Component } from 'react';

export default class AddInventory extends Component{
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.formData = createRef();
    }
    // addproduct handler method
    add = (event) => {
        event.preventDefault();
        //console.log(formData.current)
        const newProduct = {
            product_name: this.formData.current.product_name.value,
            qty: Number(this.formData.current.qty.value),
            reOrderQty: Number(this.formData.current.reOrderQty.value)
        }
        // add a new product inside products array
        this.state.products.push(newProduct);
        this.setState({
            products: this.state.products
        });
        axios.post('http://localhost:5000/products', newProduct);
        //console.log(products);
    }
    // increment qty value by 1
    increQty = (event) => {
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty + 1;
        this.setState({
            products: this.state.products
        });
    }
    // decrement qty value by 1
    decreQty = (event) => {
        const indexOfArray = event.target.value;
        this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty - 1;
        this.setState({
            products: this.state.products
        });
    }

    render() {
        return (
            <div>
                <Form className="f" onSubmit={this.add} ref={this.formData}>
                    <Form.Group className="mb-3" controlId="formBasicProductName">
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" name="product_name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicQty">
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="How many: qty" name="qty" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicReOrderQty">
                        <Form.Label>ReOrder Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="How many: qty" name="reOrderQty" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Add to Inventory
            </Button>
                </Form>
               <Container className="c">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name:</th>
                            <th>Qty</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.qty}</td>
                                        <td>
                                            <Button variant="success" onClick={event => this.increQty(event)} value={index}>+</Button>
                                            <Button variant="danger" onClick={event => this.decreQty(event)} value={index}>-</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                </Container>
                
            </div>
        )
    }

}