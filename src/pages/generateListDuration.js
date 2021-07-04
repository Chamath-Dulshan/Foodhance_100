import React, { Component } from "react";
import "./verticalcenter.css";
import { Button, Form} from "react-bootstrap";


class GenerateListDuration extends Component {
    state = {};
    render() {
      return (
        <div class="vcenter">
        <Form>
          <h1>You can predict only one product at a time</h1>
          <Form.Group controlId="fromTime">
            <Form.Label>Enter the product Name </Form.Label>
            <Form.Control type="text" placeholder="Enter the Name" />
            <Form.Label>Enter the number of dates </Form.Label>
            <Form.Control type="text" placeholder="How many dates do you want to predict" />

          </Form.Group>


         <Button style ={{background:"red"}} variant="primary" type="submit">
            Predict
                      </Button>
        </Form>
      </div>
    
      );
    }
  }
  
  export default GenerateListDuration;
  