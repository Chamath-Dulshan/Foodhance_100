import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import Storage from "../pages/storage";
import AddItem from "../pages/addItem";
import Sell from "../pages/sell";
import View from "../pages/view";
import EditProduct from '../pages/editproduct';
import GenerateListDuration from '../pages/generateListDuration';
import Login from "../pages/Login";
import Register from "../pages/Register/register";

export default function AppRouter() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/additem" component={AddItem}></Route>
        <Route path="/storage" component={Storage}></Route>
        <Route path="/sell" component={Sell}></Route>
        <Route path="/view" component={View}></Route>
        <Route path="/generatelistduration" component={GenerateListDuration}></Route>
        <Route path="/editproduct/:id" component={EditProduct}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </React.Fragment>
  );
}
