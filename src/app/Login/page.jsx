"use client";

import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { connect } from 'react-redux';
import Input from './Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setLoggedIn } from '../Redux/slices/loggedInSlice';
import { useDispatch } from 'react-redux';
import { setLogin } from '../Redux/slices/loginSlice';

const API_URL = 'http://localhost:3001/api';

const Login = ({ login }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleOnFormSubmit = async (e) => {
    e.preventDefault();
    console.log(username, userEmail, userPassword);

    try {
      const userData = { username, email: userEmail, password: userPassword };
      const response = await axios.post(`${API_URL}/register`, userData);
      router.push('/');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnLoginSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const userData = { email: userEmail, password: userPassword };
      const response = await axios.post(`${API_URL}/login`, userData);
      console.log('Login Response:', response.data);
      router.push('/Dashboard');
      dispatch(setLoggedIn(true));
    } catch (error) {
      console.error('Login Error:', error);
      console.log('Error Response:', error.response?.data);
      setError(true);
    }
  };

  const changeToLogin = () => {
    router.push('/Login');
    dispatch(setLogin('Login'));
  };

  const changeToRegister = () => {
    router.push('/Login');
    dispatch(setLogin('Register'));
  };

  return (
    <div className='h-screen w-full flex items-center justify-center -z-20 bg-hero-pattern'>
      <form onSubmit={login === 'Login' ? handleOnLoginSubmit : handleOnFormSubmit} method='post'>
        <div className='flex flex-col items-center justify-center w-[600px] h-[600px] p-6 rounded-lg shadow-md bg-black bg-opacity-70'>
          <Typography className='text-white m-5' variant='h5' gutterBottom>
            {login === 'Login' ? 'Login' : 'Register'}
          </Typography>

          {isSubmitted && (userEmail.length < 4 || userPassword.length < 4) && (
            <p className='text-red-500 text-sm mt-2'>Please enter a valid email and password</p>
          )}

          {isSubmitted && error && (
            <p className='text-red-500 text-sm mt-2'>Login failed. Please check your credentials.</p>
          )}

          {login === 'Register' && (
            <Input label='Username:' id='name' onChange={(e) => setUsername(e.target.value)} />
          )}
          <Input label='Email:' id='email' onChange={(e) => setUserEmail(e.target.value)} />
          <Input label='Password:' id='password' onChange={(e) => setUserPassword(e.target.value)} />

          {login === 'Register' && <Input label='Confirm Password:' id='password' />}

          <Button
            type='submit'
            className='bg-blue-700 -py-6 text-white rounded-md h-15 mt-4 mb-4 hover:scale-140 focus:outline-none focus:ring focus:border-blue-300 w-[40%] h-[10%]'
          >
            Submit
          </Button>

          <p className='text-white'>
            Already have an account? Click{' '}
            <span onClick={changeToLogin} className='text-gray-500 underline cursor-pointer'>
              here
            </span>{' '}
            to {login === "Login" ? 'Register' : 'Login'}.
          </p>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.login.login,
});

export default connect(mapStateToProps)(Login);


