import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import {Form} from 'react-bootstrap';

export default class EditProduct extends Component{
    constructor(props){
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productQuantity: '',
            date: new Date(),
            productPrice: ''
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/products'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    productName: res.data.productName,
                    productQuantity: res.data.productQuantity,
                    date: new Date(res.data.date),
                    productPrice: res.data.productPrice
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        // retrieve from db
        axios.get('http://localhost:5000/products')
            .then(res => {
                this.setState({
                    products: res.data.map(product => product.productName)
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeProductName(e){
        this.setState({
            productName: e.target.value
        });
    }

    onChangeProductQuantity(e){
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

        // updating db
        axios.put('http://localhost:5000/products/update/'+this.props.match.params.id, product)
            .then(res => console.log(res.data));

        window.location = '/view';
    }

    render(){
        return(
            <div class="vcenter">
                <Form onSubmit={this.onSubmit}>
                <h1>Update Product</h1>

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
                    onChange={this.onChangeProductQuantity}
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

                <div className="form-group">
                    <input type="submit" value="Update Product" className="btn btn-primary" />
                </div>
                </Form>
            </div>
        )
    }
}