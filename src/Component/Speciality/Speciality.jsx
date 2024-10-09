import React from 'react'
import './Speciality.css'
import { FaBookMedical,FaBriefcaseMedical,FaCommentMedical,FaHandHoldingMedical } from "react-icons/fa";
import { Row,Col} from 'react-bootstrap';

function Speciality() {
  return (
    <div className='container'>
      <div className='speciality-heading'>
        <h2>Find by Speciality</h2>
      </div>
      <div className='speciality-containt'>
        <p>Simply browse through our extensive list of trusted doctors,<br/> schedule your appointment hassle-free.</p>
      </div>
      <div>
        <Row>
            <Col className='icon1'></Col>
            <Col className='icon-cection'>
            <FaBookMedical className='icon'/>
            <FaHandHoldingMedical className='icon'/>
            <FaBriefcaseMedical className='icon'/>
            <FaCommentMedical className='icon'/>
            
            </Col>
            <Col className='icon'></Col>

        </Row>
      </div>
    </div>
  )
}

export default Speciality
