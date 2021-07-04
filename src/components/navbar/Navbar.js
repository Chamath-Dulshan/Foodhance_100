import React, { Component } from "react";
import { Button } from "../Buttons";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  performLogOut = () => {
    localStorage.clear();
    window.location = '/login';
  };


  render() {
    return (
      <nav className="NavItems">
        <h1 className="nav-logo">
          FoodHance
          <i className="fab fa-react"></i>
        </h1>
        {/* (bars = Hamburger && times = "Close") in Font Awesome */}
        {/* Transitioning Hamburger to Close and Vise-Versa */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.clName} href={item.url}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {(localStorage.getItem('UserType')) ?
          <button className="btn btn-danger"  style={{ marginRight: '3%' }}
            onClick={() => this.performLogOut()}>Logout</button>
          :
          <nav>

            <Link to={`/login`}>
              <button  className="btn btn-primary">Login</button>
            </Link>
            <Link to={`/register`} style={{marginLeft:'5px'}}>
              <button className="btn btn-success">Register</button>
            </Link>
          </nav>
        }

      </nav>
    );
  }
}

export default NavBar;
