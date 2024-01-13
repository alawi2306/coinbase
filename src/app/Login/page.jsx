
"use client"

import React, {useState} from 'react';
import {Typography } from '@mui/material';
import { connect } from 'react-redux';
import Input from './Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setLoggedIn } from '../Redux/slices/loggedInSlice';
import { useDispatch } from 'react-redux';


const Login = ({ login }) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null)

  const router = useRouter()
    // Define a function to handle form submission
    const handleOnFormSubmit = async (e) => {

      e.preventDefault(); // Prevent the default form submission
  
      console.log(name, email, password)
  
      try {
        const userData = { name, email, password };
  
        // Make a POST request to your server endpoint
        const response = await axios.post('http://localhost:3001/api/register', userData);
  
        router.push("/")
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleOnLoginSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitted(true)
    
      try {
        console.log(email, password); // Add this line
        // Check if email and password are not empty
       
        const userData = { email, password };
        const response = await axios.post('http://localhost:3001/api/login', userData);
        console.log('Login Response:', response.data); // Handle successful response as needed
        router.push('/')
        dispatch(setLoggedIn(true))
      } catch (error) {
        console.error('Login Error:', error);
        console.log('Error Response:', error.response.data);
        setError(true)
      }
    };
    
    
  const backgroundImageUrl = 'https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?w=826&t=st=1703270891~exp=1703271491~hmac=4af4ed3667767ffc1b578ddc9230a739232c10ad18c296431fc4e2381392ed15';

  return (
    <div className='h-screen w-full flex items-center justify-center -z-20' style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form onSubmit={login === "Login" ? handleOnLoginSubmit : handleOnFormSubmit} method="post">
        <div className='flex flex-col items-center justify-center w-[600px] h-[500px] p-6 rounded-lg shadow-md bg-black bg-opacity-70'>

          <Typography className='text-white m-5' variant="h5" gutterBottom>
            {login === 'Login' ? 'Login' : 'Register'}
          </Typography>
          
          {(isSubmitted === true && (email.length < 4 || password.length < 4)) && (
          <p className="text-red-500 text-sm mt-2">Please type in a valid email and password</p>
        )}

      {(isSubmitted === true && error === true) && (
          <p className="text-red-500 text-sm mt-2">Please type in a valid email and password</p>
        )}
          
          {login === "Register" && <Input
          label="Username:"
          id="name"
          onChange= {(e) => setName(e.target.value)}
  
          /> }
          <Input 
          label="Email:"
          id="email"          
          onChange= {(e) => setEmail(e.target.value)}
      
          />
          <Input 
          label= "Password:"
          id= "password"
          onChange= {(e) => setPassword(e.target.value)}

          />
          {login === 'Register' && <Input 
           label= "Confirm Password:"
           id= "password"
          />}
           <button
          type="submit" // Change the type to "submit" to trigger the form submission
          className="bg-red-700 -py-6 text-white rounded-md h-15 mt-4 hover:scale-140 focus:outline-none focus:ring focus:border-blue-300 w-[40%] h-[10%]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log('Current Redux State:', state); // Log the state
  return {
    login: state.login.login,
  };
};

export default connect(mapStateToProps)(Login);


