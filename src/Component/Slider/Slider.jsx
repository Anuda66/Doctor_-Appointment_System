import React from 'react'
import './Slider.css'
import { Row,Col,Button } from 'react-bootstrap'
import slidrerIMG from '../../assets/doc.png'

function Slider() {
  return (
    <div className='slider container'>
        <Row>
            <Col>
                <div className='sliderHead'>
                    <h1 className='sliderHead-t'>Book Appoiment With Trusted Doctor </h1>
                </div>               
                <div className='headerbtn'>
                    <Button className='btn1'> Book appoiment</Button>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={slidrerIMG} alt="Doc" />
                </div>
            </Col>
        </Row>  
    </div>
  )
}

export default Slider
