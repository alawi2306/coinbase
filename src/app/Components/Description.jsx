"use client"

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { styles } from '../styles';
import Card from './Card';

const servicesArray = [
  {
    title: "Real-time data",
    desc: "We offer real-time data on all the current trending cryptocurrencies",
    imgURL: "/assets/undraw-1.svg"
  },
  {
    title: "Real-time data",
    desc: "We offer real-time data on all the current trending cryptocurrencies",
    imgURL: "/assets/undraw-2.svg"
  },
  {
    title: "Real-time data",
    desc: "We offer real-time data on all the current trending cryptocurrencies",
    imgURL: "/assets/undraw-3.svg"
  }
];

const Description = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 1.5 } }); // Adjust the duration as needed
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: 50, opacity: 0 }}
      className='h-screen w-screen flex bg-black text-white p-8 overflow-hidden overflow-y-hidden 
       flex-col flex-wrap items-center justify-start'
    >
      <div className='relative top-0 left-0 w-[50%] h-1 bg-gray-500' />
      {/* About us div */}
      <div className='flex flex-col items-center justify-evenly lg:my-10 md:my-6 sm:my-3 h-[35%] w-[60%]'>
        <Typography className={`${styles.sectionHeadText} lg:mt-8 md:mt-6 sm:mt-4}`}>
          The <span className="pink-text-gradient">crypto dashboard</span> which helps elevate your productivity.
        </Typography>
        <div>
                    <Typography className={`${styles.sectionSubText}`}>
          Experience the power of real-time cryptocurrency data with our cutting-edge services.
          Immerse yourself in live updates, enabling you to stay ahead in the dynamic world of crypto.
        </Typography>
        </div>

      </div>
      {/* Cards div */}
      <div className='flex flex-row flex-wrap h-[50%] w-full items-center justify-center gap-12'>
        {servicesArray.map((service, i) => {
          return <Card name={service.title} desc={service.desc} url={service.imgURL} key={i} />;
        })}
      </div>
    </motion.div>
  );
};

export default Description;

