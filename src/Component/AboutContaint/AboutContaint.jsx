import React from 'react'
import { Row,Col } from 'react-bootstrap'
import aboutImage from '../../assets/about.png'
import './AboutContaint.css'

function AboutContaint() {
  return (
    <div>
      <div className='container'>
        <div className='about-title'>
          <h2>ABOUT US</h2>
        </div>
        <div>
          <Row>
            <Col>
              <div >
                  <img src={aboutImage} alt="aboutImage" className='aboutImage'/>
              </div>
            </Col>
            <Col>
            <div className='about-containt'>
              <p>
              Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
              </p>
            </div>
            <div>
              <p>
              Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
              </p>
            </div>
            <div>
              <h5>Our Vision</h5>
            </div>
            <div>
              <p>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default AboutContaint
