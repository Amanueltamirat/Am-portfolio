import React from 'react'
import './Hero.scss'
import {motion} from 'framer-motion'
const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
     animate:{
        x:0,
        opacity:1,
        transition:{
        duration:1,
        staggerChildren:0.1
        },

    },
    scrollButton:{
     opacity:0,
     y:10,
    transition:{
       duration:2,
       repeat:Infinity
     }
}

}
const sliderVariants = {
    initial:{
        x:0,
        
    },
     animate:{
        x:'-220%',
        transition:{
        repeat:Infinity,
        repeatType:'mirror',
        duration:20,
       
        },

    }
}

function Hero() {
  return (
    <div className='hero' >
        <div className='wrapper'>

        <motion.div className='text-container' variants={textVariants} initial='initial' animate='animate' >
           <motion.h2 variants={textVariants}>AMANUEL TAMIRAT</motion.h2> 
           <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
           <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}><a href='#Portfolio'>See the Latest Projects</a></motion.button>
             <motion.button variants={textVariants}><a href='#Contact'>Contact Me</a></motion.button>
        </motion.div>
            <motion.img variants={textVariants} alt='' src='/scroll.png' animate='scrollButton'/>
           </motion.div>
        </div>
        <motion.div  className='sliding-text-container' variants={sliderVariants} initial='initial' animate='animate'>
            Developer
        </motion.div>
        <div className='image-container'>
            <img className='img'  alt='my-pp' src='/result.png'/>
        </div>
    </div>
  )
}

export default Hero