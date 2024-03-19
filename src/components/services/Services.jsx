import React from 'react'
import './Services.scss'
import {motion} from 'framer-motion'
const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
     animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

function Services() {
  return (
    <motion.div className='services' variants={variants} initial='initial' animate='animate'>
        <motion.div className='textContainer' variants={variants}>
            <p>I focus on helping your brand grow
              <br/>
                 and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <div className='title'>
                <img src='/people.webp' alt=''/>
                <h1>
                    <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
                </h1>
            </div>
             <div className='title'>
                <h1>
                    <motion.b whileHover={{color:'orange'}}>For Your</motion.b> Business
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>
            <motion.div className='box' whileHover={{background:'lightgray', color:'black'}} >
                <h2>Website Development</h2>
                <p>Designing and developing websites from scratch using technologies like HTML, CSS, JavaScript, and various frameworks.</p>
                {/* <button>Go</button> */}
            </motion.div>
             <motion.div className='box' whileHover={{background:'lightgray', color:'black'}} >
                <h2>Backend Development</h2>
                <p>Setting up servers, databases, and developing the backend logic using technologies like Node.js.</p>
                {/* <button>Go</button> */}
            </motion.div>
              <motion.div className='box' whileHover={{background:'lightgray' ,color:'black'}} >
                <h2>Database Management</h2>
                <p>Designing and managing databases using technologies like NoSQL (MongoDB, Firebase).</p>
                {/* <button>Go</button> */}
            </motion.div>
             <motion.div className='box' whileHover={{background:'lightgray', color:'black'}} >
                <h2> Web Design</h2>
                <p>Designing visually appealing and user-friendly interfaces</p>
                {/* <button>Go</button> */}
            </motion.div>
        </motion.div>
        
    </motion.div>
  )
}

export default Services