import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      type: null
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.password != '' && this.state.userName != '') {
      axios.get(`http://localhost:5000/users/${this.state.userName}`)
        .then(userElem => {
          if (userElem.data.password== this.state.password) {
            alert('Login Success!');
              //success notification 
              toast.success('User login Successfull!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('User', userElem.data.userName);
            localStorage.setItem('UserType', userElem.data.type);
            window.location = '/storage';
          } else {
            alert('Invalid Credentials')
          }
        })
        .catch((error) => {
          alert(error);
        }).catch(err => {
          alert('Invalid credentials')
        });

    } else {
      alert('Please Enter values');
    }
  };

  render() {
    return (
      <div>
        <Card border="dark" style={{ width: 'auto', height: 'auto', marginLeft: '40%', marginRight: '40%', marginTop: '10%', marginBottom: '10%', padding: '10px', backgroundColor: 'white' }}>
          <div className="card-header card-header-primary card-header-icon">
            <div className="card-icon">
              <h3>Login</h3>
            </div>
          </div>

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicName" style={{ padding: '15px' }}>
              <Form.Label style={{ color: 'black' }}>User Name</Form.Label>
              <Form.Control name="userName"
                required
                type="text"
                placeholder="Ex: examplemail.com"
                onChange={(event) => this.onChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName" style={{ padding: '15px' }}>
              <Form.Label style={{ color: 'black' }}>Password</Form.Label>
              <Form.Control name="password"
                required
                type="password"
                placeholder="Enter your password here!"
                onChange={(event) => this.onChange(event)}
              />
            </Form.Group>
            <div style={{ marginTop: '5%', textAlign: 'center' }}>
              <Button type="submit" variant="primary">Login</Button>
              <br/><br/>
              <Link to="/register" style={{ textDecoration: 'none', color: 'black', marginBottom: '40%' }}>No Account? Register Now!</Link>
            </div>
            <br/>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login
