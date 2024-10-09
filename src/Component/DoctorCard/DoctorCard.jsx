import React from 'react'
import './DoctorCard.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row,Col } from 'react-bootstrap';
import docImage1 from '../../assets/1.png'
import docImage2 from '../../assets/2.png'
import docImage3 from '../../assets/3.png'
import docImage4 from '../../assets/4.png'
import docImage5 from '../../assets/5.png'

function DoctorCard() {
  return (
    <div className='container'>
        <div className='carde-containt'>
            <div className='Row-doc'>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage1} alt="Doc-Profile-Image" className='doc-Image1' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage5} alt="Doc-Profile-Image" className='doc-Image5' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage3} alt="Doc-Profile-Image" className='doc-Image3' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage4} alt="Doc-Profile-Image" className='doc-Image4' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='Row-doc'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage1} alt="Doc-Profile-Image" className='doc-Image1' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage2} alt="Doc-Profile-Image" className='doc-Image2' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage3} alt="Doc-Profile-Image" className='doc-Image3' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='craed-image'>
                            <img src={docImage4} alt="Doc-Profile-Image" className='doc-Image4' />
                            </div>
                            <Card.Body>
                                <div className='status'><p>Available</p></div>
                                <Card.Title>Dr. Richard James</Card.Title>
                                <Card.Text>
                                MBBS - General physician
                                </Card.Text> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            
        </div>
    </div>
  )
}

export default DoctorCard
