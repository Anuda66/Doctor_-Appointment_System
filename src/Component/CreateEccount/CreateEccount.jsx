import React from 'react'
import './CreateEccount.css'
import { Row,Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CEImage from '../../assets/3.png'
import { Link } from 'react-router-dom'

function CreateEccount() {
  return (
    <div className='container'>
      <div className='create-eccount'>
        <Row>
            <Col>
                <div className='create-eccount-hedding'>
                    <h1 className='head-t' >
                        Book Appointment <br /> With 100+ Trusted Doctors
                    </h1>
                </div>
                <div className='crete-eccount-btn'>
                    <Link to='/login'><Button className='eccount-btn'>Create Eccount</Button></Link>
                </div>
            </Col>
            <Col>
                <img src={CEImage} alt="CEImage" className='CEImage' />
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default CreateEccount
