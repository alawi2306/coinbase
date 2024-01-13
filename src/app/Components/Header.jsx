"use client"

import React from 'react';
import { Navbar } from './Navbar';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import {styles} from "../styles.js"
import CoinCanvas from '../Canvas/coin';
import "../globals.css"
import { useRouter  } from 'next/navigation';


const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn.loggedIn
});

const Header = ({ loggedIn }) => {
  return (
    <div>
       {loggedIn === false ? <header className="relative bg-primary text-white p-8 overflow-hidden">
      <Navbar />
      <div className='flex flex-row w-full h-screen justify-evenly'>
      <div className='flex flex-col items-center justify-center'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>    
      <div className='flex flex-col justify-center items-center h-[600px] w-[50%]'>
        <h1 className={`${styles.heroHeadText} flex text-center`}> Welcome to Coinpulse!</h1> 
        <p className={`${styles.heroSubText} text-center my-5`}>
           Coinpulse is a free source of finding out cryptocurrency data! Explore the world of cryptocurrencies and stay updated with the latest trends.
        </p>     
       </div>
      <div className='h-[80%] w-[40%]'>
        <CoinCanvas />
      </div>
      </div>
     

    </header> : null}
    </div>
  );
};

export default connect(mapStateToProps)(Header);
