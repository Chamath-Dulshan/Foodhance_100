import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Sell extends Component {
  state = {};
  render() {
    return (
      <div class="vcenter">
        <Form>
          <h1>Sell Product</h1>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control type="text" placeholder="Enter product quantity" />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product price in Rs."
            />
          </Form.Group>

          <Form.Group controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="text" placeholder="Enter discount" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sell
          </Button>
        </Form>
      </div>
    );
  }
}

export default Sell;
