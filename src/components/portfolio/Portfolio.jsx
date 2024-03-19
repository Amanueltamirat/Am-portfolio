import React, { useRef } from 'react'
import './Portfolio.scss'
import {motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
    {
        id:1,
        title:'Amazon Clone',
        img:'/amazon.PNG',
        desc:'This is my Amazon clone, and I used technologies like React, Bootstrap, Nodejs, and Mongodb.',  
        url:'http://my-amazon-14yi.onrender.com/'
    },
      {
        id:2,
        title:'Netflix Clone',
        img:'/netflix.PNG',
        desc:'netflix clone with Reactjs',
        url:'http://my-netflix-clone-rk2x.onrender.com'  
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
        title:'Workout Recorder',
        img:'/workout.PNG',
        desc:'This is my workout recording app. I used technologies like HTML, CSS, and JavaScript.',  
        url:'https://amanueltamirat.github.io/Record-workout' 
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