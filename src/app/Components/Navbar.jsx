"use client"

import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { useRouter  } from 'next/navigation';
import { setLogin } from '../Redux/slices/loginSlice';
import { useDispatch } from 'react-redux';
import "../globals.css"
import { motion } from 'framer-motion';

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

// ... (your imports)

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(null);

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Move the Navbar off-screen initially
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const onLogin = () => {
    router.push("/Login");
    dispatch(setLogin("Login"));
  };

  const onSignup = () => {
    router.push("/Login");
    dispatch(setLogin("Register"));
  };

  return (
    <motion.div
    >
      <div className='flex justify-center'>
        <nav className='flex justify-evenly items-center w-full p-4 top-0 bg-black text-white'>
          <div className='flex items-center flex-row justify-center flex-wrap'>
            <h1 className='text-xl font-bold'>
              Coin <span className='pink-text-gradient'> Pulse </span>
            </h1>
            <FontAwesomeIcon icon={faBitcoinSign} className='text-2xl ml-2 h-8 w-8' />
          </div>
          <ul className='flex space-x-4 gap-4 cursor-pointer lg:text-lg md:text-md sm:text-sm'>
            {navLinks.map((link, i) => (
              <li
                key={i}
                onClick={() => setIsClicked(i)}
                className={`text-white font-bold hover:text-gray-500 text-lg ${i === isClicked ? 'text-gray-500' : ''}`}
              >
                <a>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className='flex flex-nowrap flex-row'>
            <Button onClick={onLogin} className='text-white font-bold text-lg cursor-pointer z-100 p-5'>Login</Button>
            <Button onClick={onSignup} className='text-white font-bold text-lg cursor-pointer'>Sign up</Button>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};
