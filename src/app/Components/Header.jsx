"use client"

import React from 'react';
import { Navbar } from './Navbar';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { styles } from "../styles.js";
import "../globals.css";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn.loggedIn
});

const Header = ({ loggedIn }) => {
  const router = useRouter();

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        duration: 0.5, // Increase the duration to 2 seconds (or adjust to your preference)
      },
    },
  };
  

  return (
    <motion.header
      className="relative bg-black text-white p-8 overflow-hidden overflow-y-hidden hero-pattern h-screen w-screen"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      <Navbar />
      {loggedIn === false ? (
        <div className='flex flex-row w-full h-full justify-evenly'>
          <div className='gradient-03 z-10 rounded-md left-0 bottom-0'>
            s
          </div>
          <div className='gradient-02 z-10 rounded-md top-0 left-0'>
            s
          </div>
          <div className='gradient-04 z-10 rounded-md top-0 right-0'>
            s
          </div>
          <div className='flex flex-col items-center justify-center lg:ml-20 md:ml-8 sm:ml-4 lg:mr-16 md:mr-10 sm:mr-6   '>
            <div className='w-5 h-5 rounded-full bg-[#89165fee]' />
            <div className='w-1 sm:h-80 h-40 pink-gradient' />
          </div>
          <div className='flex flex-col justify-center h-[600px] w-[50%]'>
            <h1 className={`${styles.heroHeadText}`}> Building the  <br /> <span className='pink-text-gradient mx-2 inline'>crypto world</span> <br />  one step at a time </h1>
            <p className={`${styles.heroSubText} my-5`}>
              Explore the world of cryptocurrencies and stay updated with the latest trends.
            </p>
          </div>
          <div className='h-[80%] w-[40%] flex justify-center items-center relative '>
            <img className='w-120 h-100' src="/assets/chart.jpg" alt="" />
          </div>
        </div>
      ) : null}
    </motion.header>
  );
};

export default connect(mapStateToProps)(Header);
