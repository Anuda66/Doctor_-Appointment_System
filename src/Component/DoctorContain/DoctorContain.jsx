import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import DoctorCard from '../DoctorCard/DoctorCard'
import './DoctorContain.css'

function DoctorContain() {
  return (
    <div className='container'>
      <Row>
            <div>
                <p>
                    Browse through the doctors specialist.
                </p>
            </div>
      </Row>
      <Row>
        <Col xs lg="2">
                <Button className='btn-dic-ctagary'>General physician</Button>
                <Button className='btn-dic-ctagary'>Gynecologist</Button>
                <Button className='btn-dic-ctagary'>Dermatologist</Button>
                <Button className='btn-dic-ctagary'>Pediatricians</Button>
                <Button className='btn-dic-ctagary'>Neurologist</Button>
                <Button className='btn-dic-ctagary'>Gastroenterologist</Button>          
        </Col>
        <Col>
            <DoctorCard/>
        </Col>
      </Row>
    </div>
  )
}

export default DoctorContain
