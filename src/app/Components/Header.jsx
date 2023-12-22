import React from 'react';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <header className="relative bg-gray-800 text-white p-8 overflow-hidden">
      <Navbar />
      <div className='flex flex-col justify-center items-center h-[600px]'>
        <h1 className="text-5xl font-bold mb-4"> Welcome to Coinpulse</h1>
          <p className="text-lg text-center mb-6 text-gray-400 w-[50%] my-10">
           Coinpulse is a free source of finding out cryptocurrency data! Explore the world of cryptocurrencies and stay updated with the latest trends.
          </p>        
      <Button>sadads</Button>
      </div>
    </header>
  );
};

export default Header;
