import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from '../../../redux/actions';
import { toast } from "react-toastify";
import UserService from '../../../services/UserService';

const Dashboard = () => {

    const [userData, setUserData] = useState();
    const {auth} = useSelector(state => state);
    const {user} = auth;
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
      dispatch(logout());
      navigate('/');
    }

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await UserService.get();
              setUserData(response)
            } catch (error) {
                toast.error(`${error.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
          };
          fetchData();
    },[])

  return (
    <>
    <div className='d-flex justify-content-around'>
        <div>
            Hello {user.email}!! Welcome 
        </div>
        <div>
            <Button onClick={onLogout}>
                Logout
            </Button>
        </div>
    </div>
    <Container className="d-flex justify-content-center align-items-center vh-100">
      
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    </>
  );
};

export default Dashboard;
