import React, { useRef } from 'react'
import './Portfolio.scss'
import {motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
    {
        id:1,
        title:'My-Ecommerce app',
        img:'/e-commerce.png',
        desc:'This is my e-commerce app, and I used technologies and modules like Redis,cloudinary for storing images, Tailwindcss,Recharts,React,framer-motion,Stripe for payment, Nodejs and Mongodb.',  
        url:'https://my-e-commerce-3c72.onrender.com'
    },
      {
        id:2,
        title:'my-x',
        img:'/my-x.png',
        desc:'This is my x clone, and I used technologies like React,Tanstack query,Daisyui, Nodejs,Express, and Mongodb.',
        url:'https://my-x.onrender.com' 
    },
      {
        id:3,
        title:'ChatGPT Bot',
        img:'/chatGpt.PNG',
        desc:'This is my chatGPT bot; you can ask anything. I used HTML, CSS, and JavaScript.',
        url:'https://amanueltamirat.github.io/my-chatGPT'  
    },
    {
        id:4,
        title:'Landing Page',
        img:'/landing-page.png',
        desc:'Just landing page, by using React and Tailwindcss',  
        url:'https://amanueltamirat.github.io/landing-page'
    },
      {
        id:5,
        title:'Amazon Clone',
        img:'/amazon.PNG',
        desc:'This is my Amazon clone, and I used technologies like React, Bootstrap, Nodejs, and Mongodb.',  
        url:'http://my-amazon-14yi.onrender.com'
    }
]

const Single = ({item})=>{
   const ref = useRef()
const {scrollYProgress} = useScroll({
  target:ref,
  // offset:['start start', 'end start']
})   
const y = useTransform(scrollYProgress, [0,1], [-200,200])
    return <section>
            <div className='container'>
              <div className='wrapper'>
              <div className='imageContainer' ref={ref}>
              <img alt='' src={item.img}/>
              </div>
              <motion.div className='textContainer' style={{y}}>
                <h2> {item.title}</h2>
                <p>{item.desc}</p>
                <button><a target='_blank' href={item.url}>See Demo</a></button>
              </motion.div>
              </div>
            </div>
      </section>
}

function Portfolio() {

const ref = useRef()
const {scrollYProgress} = useScroll({target:ref, offset:['end end', 'start start']})   
const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30
})
  return (
    <div className='portfolio' ref={ref}>
         <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className='progressBar'></motion.div>
         </div>
        {items.map((item)=>{
            return(
                <Single item={item} key={item.id}/>
            )
        })}
       
        
    </div>
  )
}

export default Portfolio