import React from 'react';
import { Card, Button, Form, Col, Raw } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            password2: '',
            type: 'USER'
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    //onclick method for submit button in form
    onSubmit(event) {
        event.preventDefault();

        const userObj = {
            userName: this.state.userName,
            password: this.state.password,
            type: this.state.type
        };

        //validate the 2 fields of passwords whether they are same
        if (this.state.password == this.state.password2) {
            console.log(userObj);
            axios.post('http://localhost:5000/users/add', userObj)
                .then(res => {
                    window.location = '/login';
                })
                .catch(err => {
                    window.location = '/login';
                });
        } else {
            alert('Password not matching...!')

        }
    }

    /* keep track of changes of the form field values. */
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        // console.log(name, value);
    }

    render() {
        return (
            <div className="row" style={{ marginTop: '5%' }}>

                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Card border="dark">
                        <div className="container">
                            <div >

                            </div>
                            <br />
                            <br />
                            <Form onSubmit={this.onSubmit}>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label style={{ color: 'black' }}>Name</Form.Label>
                                        <Form.Control name="userName"
                                            required
                                            type="text"
                                            placeholder="Ex : Jhon Carter"
                                            onChange={(event) => this.onChange(event)}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicPassword">
                                        <Form.Label style={{ color: 'black' }}>Password</Form.Label>
                                        <Form.Control name="password"
                                            minLength='8'
                                            required
                                            type="password"
                                            placeholder="Should have minimum of 8 characters"
                                            onChange={(event) => this.onChange(event)}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicPassword">
                                        <Form.Label style={{ color: 'black' }}>Re Enter the Password</Form.Label>
                                        <Form.Control name="password2"
                                            required
                                            type="password"
                                            placeholder="Re type your password"
                                            onChange={(event) => this.onChange(event)}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <div style={{ marginTop: '5%', textAlign: 'center' }}>
                                    <Button type="submit" variant="info" className='bg-info'>Register</Button>
                                </div>
                            </Form>

                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/login" style={{ textDecoration: 'none', color: 'black', marginBottom: '10%', textAlign: 'center' }}>Already have an account? Login</Link>
                            </div>
                            <br />
                        </div>
                        <br />
                        <br />

                    </Card >
                </div>
                <br />
            </div>

        );
    }
}

