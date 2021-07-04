import React, { Component } from "react";
import "./verticalcenter.css";
import { Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DatePicker from "react-datepicker";

class AddItem extends Component {
  constructor(props){
    super(props);

    // binding 'this' to each method for specification
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProducQuantity = this.onChangeProducQuantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productName: '',
      productQuantity: 0,
      date: new Date(),
      productPrice: 0.00
    };
  }

  onChangeProductName(e){
    this.setState({
      productName: e.target.value
    });
  }

  onChangeProducQuantity(e){
    this.setState({
      productQuantity: e.target.value
    });
  }

  onChangeDate(date){
    this.setState({
      date: date
    });
  }

  onChangeProductPrice(e){
    this.setState({
      productPrice: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const product = {
      productName: this.state.productName,
      productQuantity: this.state.productQuantity,
      date: this.state.date,
      productPrice: this.state.productPrice
    };

    console.log(product);

    // sending data to backend
    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data));

      window.location.reload();
  }

  render() {
    return (
      <div class="vcenter">
        <Form onSubmit={this.onSubmit}>
          <h1>Add Product</h1>
          {/* <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control type="text" placeholder="Enter product quantity" />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Enter date" />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product price in Rs."
            />
          </Form.Group> */}

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              required
              className="form-control"
              value={this.state.productName}
              onChange={this.onChangeProductName}
            />
          </div>

          <div className="form-group">
            <label>Product Quantity</label>
            <input
              type="text"
              placeholder="Enter Product Quantity"
              required
              className="form-control"
              value={this.state.productQuantity}
              onChange={this.onChangeProducQuantity}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />    
            </div>
          </div>

          <div className="form-group">
            <label>Product Price</label>
            <input
              type="text"
              placeholder="Enter Product Price in Rs."
              required
              className="form-control"
              value={this.state.productPrice}
              onChange={this.onChangeProductPrice}
            />
          </div>

          {/* <Button variant="primary" type="submit">
            Add Product
          </Button> */}

          <div className="form-group">
            <input type="submit" value="Add Product" className="btn btn-primary" />
          </div>
        </Form>
      </div>
    );
  }
}

export default AddItem;
