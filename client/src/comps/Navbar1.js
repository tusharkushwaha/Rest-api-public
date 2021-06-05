import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar1({ history }) {
     return (
          <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="px-3">
               <Navbar.Brand to="/"> <img src="/images/logo.png" alt="Logo" height="30rem" /> REST API</Navbar.Brand>

          </Navbar>


     )

}


export default Navbar1