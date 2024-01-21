"use client"

import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'

const CardDescription = ({title, desc}) => {
  return (
    <div className='h-[25%] md:[20%] sm:[15%] w-full flex justify-between flex-row border-6 box-shadow'>
       <div className='flex w-[50%] flex-col justify-evenly'>
        <div className='flex items-center justify-center'>
          <motion.div  className='w-[25%] h-2 pink-gradient mb-6'
          animate={{ x: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
           />
        </div>
         <h2 className={`${styles.sectionHeadText}`}>{title}</h2>
       </div>
       <div className='flex w-[50%] justify-center items-center text-center'>
         <h2 className={`${styles.sectionSubText}`}>{desc}</h2>
       </div>
    </div>
  )
}

export default CardDescription