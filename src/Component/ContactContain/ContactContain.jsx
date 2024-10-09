import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import contactImage from '../../assets/contactImage.png'

function Contact() {
  return (
    <div>
      <div className='container'>
        <div className='about-title'>
          <h2>CONTACT US</h2>
        </div>
        <div>
          <Row>
            <Col>
              <div >
                  <img src={contactImage} alt="aboutImage" className='aboutImage'/>
              </div>
            </Col>
            <Col>
                <div>
                  <h5>
                  OUR OFFICE
                  </h5>
                </div>
                <div>
                      <br />
                      <p>
                      00000 Willms Station <br />
                      Suite 000, Washington, USA
                      </p>
                      <br />
                      <p>
                      Tel: (000) 000-0000 <br />
                      Email: greatstackdev@gmail.com
                      </p>
                      <br />
                      <h5>
                      CAREERS AT PRESCRIPTO
                      </h5>
                      <br />
                      <p>
                      Learn more about our teams and job openings.
                      </p>
                      <br />
                </div>
                <div>
                  <Button>Expolor Job</Button>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Contact
