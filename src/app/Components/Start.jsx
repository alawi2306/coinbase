import React from 'react'
import { styles } from '../styles'
import "../globals.css"
import { Typography } from '@mui/material'
import CardDescription from './CardDescription'

const descArray = [{
    title: "Real-time data",
    desc: "We offer real-time data on all the current trending cryptocurrencies",
},
{title: "Real-time data",
desc: "We offer real-time data on all the current trending cryptocurrencies"},
{
    title: "Real-time data",
    desc: "We offer real-time data on all the current trending cryptocurrencies",
},
{
    title: "Real-time data",
    desc: "We offer real-time data on all the current trending cryptocurrencies",
}]

const Start = () => {
  return (
    <div className='h-screen w-screen flex flex-col bg-black justify-center items-center'>
        <div className='w-[75%] h-[85%] flex flex-row flex-wrap'>
           <div className='w-[50%] h-full flex justify-evenly flex-col'>
             <Typography className={`${styles.sectionHeadText} pink-text-gradient`}>Get started</Typography>
             <Typography className= {`${styles.sectionSubText} w-[80%]`}>Join thousands of users who trust CryptoTrackHub to navigate the exciting and sometimes turbulent waters of the crypto market. Sign up today to experience the future of crypto tracking!</Typography>
           </div>
           <div className='flex flex-col w-[50%] lg:gap-20 md:gap-12 sm:gap-6'>
             {descArray.map((link, i) => {
                return <CardDescription 
                title= {link.title}
                desc= {link.desc}
                />
             })}
           </div>
        </div>
    </div>
  )
}

export default Start