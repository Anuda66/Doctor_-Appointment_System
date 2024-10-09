import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row,Col,Button } from 'react-bootstrap';
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Heding() {
  return (
    <div className='container'>
        <Navbar className='mt-10 pt-10'>           
            <Navbar.Brand>
              <Link to='/'><FaHospitalAlt className='logo-Icon'/></Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link ><Link to ='/' className='link'>Home</Link></Nav.Link>
                <Nav.Link ><Link to ='/doctor'>All Doctor</Link></Nav.Link>
                <Nav.Link ><Link to ='/about'>About</Link></Nav.Link>
                <Nav.Link ><Link to ='/contact'>Contact</Link></Nav.Link>
            </Nav>
            <Link to='/login'><Button>Create Eccount</Button></Link>  
        </Navbar>
        <div>
            <hr />
        </div>
    </div>
    
  )
}

export default Heding
