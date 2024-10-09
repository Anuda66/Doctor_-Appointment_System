import React from 'react'
import './Footer.css'
import { Row ,Col} from 'react-bootstrap'
import { FaHospitalAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className='container'>
        <div className='footer-containt'>
            <Row> 
                <Col xs={6} className='first-col'>
                    <div className='d-flex'>
                        <div className='icon-logo'>
                            <FaHospitalAlt/>
                        </div>
                        <div className='logo-topic'>
                            <h3>NIROGA</h3>
                        </div> 
                    </div>
                    <div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a <br/>type specimen book.
                        </p>
                    </div>
                </Col>
                <Col className='second-col'>
                    <div>
                        <h3>COMPANY</h3>
                    </div>
                    <div>
                        <p>Home</p>
                    </div>
                    <div>
                        <p>About</p>
                    </div>
                    <div>
                        <p>Delivery</p>
                    </div>
                    <div>
                        <p>Privecy Policy</p>
                    </div>
                </Col>
                <Col className='thurd-col'>
                    <div><h3>GET IN TOUCH</h3></div>
                    <div><p>+145698754</p></div>
                    <div><p>niroga@gmail.com</p></div>
                </Col>
            </Row>
        </div>
        <div>
            <hr />
        </div>
        <div className='copy-right'>
            <p>Copyright 2024 @ anuda_ransara - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
