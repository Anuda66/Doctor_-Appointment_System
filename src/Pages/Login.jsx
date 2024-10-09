import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Heding from '../Component/Hedder/Heding';
import Footer from '../Component/Footer/Footer';
import Card from 'react-bootstrap/Card';
import './Login.css'
import { Row,Col } from 'react-bootstrap';

function Login() {
  return (
    <div>
        <Heding/>
        <div className='container'>
            <div className='card-containt'>
             <Row>
                <Col></Col>

                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Create Account</Card.Title>
                            <Form className='singup'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
             </Row>
             </div>
             
        </div>
        <Footer/>
    </div>
  )
}

export default Login
