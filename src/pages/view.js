import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// implementing functional react components for view
const Product = props => (
    <tr>
        <td>{props.product.productName}</td>
        <td>{props.product.productQuantity}</td>
        <td>{props.product.date.substring(0, 10)}</td>
        <td>{props.product.productPrice}</td>
        <td>
        <Link to={"/editproduct/"+props.product._id}><button className="btn btn-warning">Update Item</button></Link> | <button className="btn btn-danger" href="#" onClick={() => {props.deleteProduct(props.product._id)}}>Delete Item</button>
        </td>
    </tr>
)

export default class ProductView extends Component{
    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = {
            products: []
        };
    }

    // retrieving products from the db
    componentDidMount(){
        axios.get('http://localhost:5000/products/')
            .then(res => {
                this.setState({
                    products: res.data
                })
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProduct(id){
        axios.delete('http://localhost:5000/products/sell/'+id)
            .then(res => console.log(res.data));
        this.setState({
            products: this.state.products.filter(el => el._id)
        })
        window.location.reload();
    }

    // productList(){
    //     return this.state.products.map(function(object, i) {
    //         return (
    //             <tr>
    //                 <td>{object.productName}</td>
    //                 <td>{object.productQuantity}</td>
    //                 <td>{object.date.substring(0,10)}</td>
    //                 <td>{object.productPrice}</td>
    //                 <td>
    //                     Update
    //                 </td>
    //                 <td>
    //                     Delete
    //                 </td>
    //             </tr>
    //         );
            
    //     })
    // }

    productList(){
        return this.state.products.map(currentproduct => {
            return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>
        })
    }

    render(){
        return(
            <div>
                <h3>Items Available</h3>
                <table className="table">
                    <thead className={"thead-light"}>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Date</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

