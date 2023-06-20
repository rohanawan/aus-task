import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {login} from '../../../redux/actions';
import {Row , Col , Container , Form , Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import UserService from '../../../services/UserService';

const Login = () => {
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        const {name, value} = e.target;
        setUserData((prevState) => ({...prevState, [name]: value}));
    }

    const onLogin = async (e) => {
        e.preventDefault();
        try {
          const response =  await UserService.login(userData);
          if(response){
            toast.success('login successful!', {
                position: toast.POSITION.TOP_RIGHT,
                className: 'success-notification',
              });
              localStorage.setItem('authToken', response?.user?.tokens?.access?.token);
              dispatch(login(userData));
              navigate('/dashboard');
          }
        } catch (error) {
            toast.error(`${error.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    const handleSignup = () =>{
        navigate('/signup');
    }
    return (
        <Container className="form-mid">
        <Row className="d-flex justify-content-lg-center align-items-center vh-100">
            <Col lg={4} md={4} sm={4} className='border border-2 rounded p-4 form-bg'>
                <Form className='pb-2' onSubmit={onLogin}>
                <Form.Label className='d-flex justify-content-center mt-6 fw-bold fs-3 white'>LOGIN</Form.Label>
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className='mt-2 pt-1 white'>Email:</Form.Label>
                    <Form.Control required type="email" placeholder="Enter Your Email:" name="email" onChange={onChange} />
                </Form.Group>
                <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label className='mt-2 pt-1 white'>Password:</Form.Label>
                    <Form.Control required type="password" placeholder="Enter Password:" name="password" onChange={onChange} />
                </Form.Group>
                <div className="d-flex justify-content-around algin-center mt-4">
                    <Button className="reg-btn white" variant="primary" type="submit">
                    Login
                    </Button>
                    <Button onClick={handleSignup} className="reg-btn white" variant="primary" type="submit">
                    Sign up
                </Button>
                </div>
                </Form>
            </Col>
            </Row>
    </Container>
    );
};

export default Login;