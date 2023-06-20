import React, {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import UserService from '../../../services/UserService';

const Signup = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

  const onSignup = async (e) => {
    e.preventDefault();
    try {
        const response =  await UserService.signup(userData);
        if(response){
          toast.success('User Signup successfully!', {
              position: toast.POSITION.TOP_RIGHT,
              className: 'success-notification',
            });    
        navigate('/');
        }
      } catch (error) {
          toast.error(`${error.message}`, {
              position: toast.POSITION.TOP_RIGHT,
          });
        }
    }

  const onChange = (e) => {
    const {name, value} = e.target;
    setUserData((prevState) => ({...prevState, [name]: value}));  
    };

  return (
    <Row className="d-flex justify-content-lg-center align-items-center vh-100">
      <Col lg={4} md={4} sm={4} className="border border-2 rounded p-4 form-bg">
        <Form className="pb-2" onSubmit={onSignup}>
          <Form.Label className="d-flex justify-content-center mt-6 fw-bold fs-3 white">SIGNUP</Form.Label>
          <Form.Group className="" controlId="formBasicName">
            <Form.Label className="mt-2 pt-1 white">Name:</Form.Label>
            <Form.Control required type="text" placeholder="Enter Your Name" name="name" onChange={onChange} />
          </Form.Group>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label className="mt-2 pt-1 white">Email:</Form.Label>
            <Form.Control required type="email" placeholder="Enter Your Email" name="email" onChange={onChange} />
          </Form.Group>
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label className="mt-2 pt-1 white">Password:</Form.Label>
            <Form.Control required type="password" placeholder="Enter Password" name="password" onChange={onChange} />
          </Form.Group>
          <div className="d-flex justify-content-center algin-center mt-4">
            <Button className="reg-btn white" variant="primary" type="submit">
              Signup
            </Button>
          </div>
          <span className="white">Already have an account? </span>
          <Link to='/'>
            Login
          </Link>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
