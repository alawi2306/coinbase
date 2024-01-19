"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { styles } from '../styles'

const Description = () => {
  return (
    <motion.div
     className='h-screen w-screen flex bg-black text-white p-8 overflow-hidden overflow-y-hidden 
     flex-col flex-wrap items-center justify-start'
     
     >
       <div className='relative top-0 left-0 w-[50%] h-1 bg-gray-500' />
       {/* About us div */}
       <div className='flex flex-col items-center justify-start lg:my-10 md:my-6 sm:my-3 w-full h-[35%]'>
        <Typography className={`${styles.sectionSubText}`}>Our services</Typography>
        <Typography className={`${styles.sectionHeadText}`}>We are commited to improving your investments.</Typography>
        <Typography>adkns</Typography>
       </div>
       {/* Cards div */}
       <div className='flex flex-row flex-wrap h-[50%] w-full'>

       </div>
    </motion.div>
  )
}

export default Description