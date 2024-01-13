"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { useRouter  } from 'next/navigation';
import { setLogin } from '../Redux/slices/loginSlice';
import { useDispatch } from 'react-redux';

const navLinks = [
  {
      title: "Home",
      id: "Home"
  }, 
  {
      title: "Start",
      id: "Blog"
  },
  {
      title: "Contact us",
      id: "Remove blog"
  }
]

export const Navbar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const onLogin = () => {
    router.push("/Login")
    dispatch(setLogin("Login"))
  }

  const onSignup = () => {
    router.push("/Login")
    dispatch(setLogin("Register"))
  }
  return (
    <div className='flex justify-center'>
      <nav className='flex justify-around items-center w-full p-4 top-0 bg-primary text-white'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>Coin Pulse</h1>
          <FontAwesomeIcon icon={faBitcoinSign} className='text-2xl ml-2 h-8 w-8' />

        </div>
        <ul className='flex space-x-4 gap-4 cursor-pointer'>
          {navLinks.map((link, i) => {
            return <li key= {i} className='text-white font-thin hover:text-gray-600 '><a>{link.title}</a></li>
          })}
        </ul>
        <div>
          <Button onClick={onLogin} style= {{color: 'blue', margin: '5px'}}>Login</Button>
          <Button onClick={onSignup} variant= "contained">Sign up</Button>

        </div>

      </nav>
    </div>
  );
};

