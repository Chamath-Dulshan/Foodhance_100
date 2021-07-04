import React, { Component } from "react";
import "react-bootstrap";
import { Container, Button, Table } from "react-bootstrap";
import "./verticalcenter.css";
import { Link } from "react-router-dom";

class Storage extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div class="vcenter">
          <Table responsive="sm">
          {(localStorage.getItem('UserType') != 'ADMIN') ? 
          <tbody>
          <tr>
            <td>
              <Link to={`/additem`}>
                <Button variant="primary" size="lg" block>
                  Add Item
                </Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={`/sell`}>
                <Button variant="primary" size="lg" block>
                  Sell
                </Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={`/view`}>
                <Button variant="primary" size="lg" block>
                  View
                </Button>
              </Link>                 
            </td>
          </tr>
          {/* <tr>
              <td>
                <Link to ={'/generatelistduration'}>
                  <Button style ={{background:"purple"}} variant="primary" size="lg"  block>
                    Predictions
                  
                  </Button>
                </Link>
              </td>
          </tr> */}
          <tr>
            <td colSpan="5">
              <Button style ={{background:"red"}} variant="primary" size="lg" block>
                Back
              </Button>
            </td>
          </tr>
        </tbody>
           : <tbody>
             
             <tr>
               <td>
                 <Link to={`/additem`}>
                   <Button variant="primary" size="lg" block>
                     Add Item
                   </Button>
                 </Link>
               </td>
             </tr>
             <tr>
               <td>
                 <Link to={`/sell`}>
                   <Button variant="primary" size="lg" block>
                     Sell
                   </Button>
                 </Link>
               </td>
             </tr>
             <tr>
               <td>
                 <Link to={`/view`}>
                   <Button variant="primary" size="lg" block>
                     View
                   </Button>
                 </Link>                 
               </td>
             </tr>
             <tr>
                 <td>
                   <Link to ={'/generatelistduration'}>
                     <Button style ={{background:"purple"}} variant="primary" size="lg"  block>
                       Predictions
                     
                     </Button>
                   </Link>
                 </td>
             </tr>
             <tr>
               <td colSpan="5">
                 <Button style ={{background:"red"}} variant="primary" size="lg" block>
                   Back
                 </Button>
               </td>
             </tr>
           </tbody>}
            
          </Table>
        </div>

  
      </Container>
    );
  }
}

export default Storage;
