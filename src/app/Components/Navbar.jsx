"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';

export const Navbar = () => {
  
  return (
    <div className='flex justify-center'>
      <nav className='flex justify-around items-center w-full p-4 bg-gray-800 text-white'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>Coin Pulse</h1>
          <FontAwesomeIcon icon={faBitcoinSign} className='text-2xl ml-2 h-8 w-8' />

        </div>
        <ul className='flex space-x-4'>
          <li>
            <a className='text-gray-400 font-light' href='#'>Home</a>
          </li>
          <li>
          <a className='text-gray-400 font-light' href='#'>About</a>
          </li>
          <li>
          <a className='text-gray-400 font-light' href='#'>Contact us</a>
          </li>
        </ul>
        <div>
          <Button style= {{color: 'blue', margin: '5px'}}>Login</Button>
          <Button variant= "contained">Sign up</Button>

        </div>

      </nav>
    </div>
  );
};

