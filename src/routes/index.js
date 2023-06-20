import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../views/app/dashboard';
import Login from '../views/auth/login';
import Signup from '../views/auth/signup';
import { ToastContainer } from 'react-toastify';

const AllRoutes = () =>{

    return(
      <>
      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element= {<Signup />} />
          <Route exact path="/dashboard" element= {<Dashboard />} />
        </Routes>
      </Router>
    </>
    )
}

export default AllRoutes;