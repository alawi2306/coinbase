"use client"

import React, {useState} from 'react'
import { styles } from '../styles'
import "../globals.css"
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {fadeIn} from '../motion';
import Image from 'next/image'

const Card = ({name, desc, url, index}) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        setMousePosition({ x, y });
    };

    const handleMouseOut = () => {
        setMousePosition({ x: null, y: null });
    };

    const cardStyle = {
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
    };

  return (
    <Tilt>
        <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        
        >
        <div 
    style={cardStyle} 
    className='bg-gray-900 lg:h-[320px] lg:w-[360px] md:h-[260px] md:w-[260px] sm:h-[200px] 
    sm:w-[200px] flex items-center justify-center flex-col cursor-pointer rounded-sm hover-effect relative
    shadow-card
    '
    onMouseMove={handleMouseMove} 
    onMouseOut={handleMouseOut}
    options = {{
        max: 45,
        scale: 1,
        speed: 450
    }}
    >
        <h3 className={`${styles.sectionSubText}`}>{name}</h3>
        <p className='text-white text-md font-medium flex items-center justify-center lg:mx-6 md:mx-4 sm:mx-2'>{desc}</p>
        <Image className='w-16 h-16' src={url} alt="" srcset="" />
    </div> 
        </motion.div>
             
    </Tilt>
    
  )
}

export default Card