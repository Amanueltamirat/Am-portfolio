import React from 'react'
import {motion} from 'framer-motion'
import './Navbar.scss'
import Sidebar from '../sidebar/Sidebar'
function Navbar() {
  return (
    <div className='navbar'>
        <Sidebar/>
<div className='wrapper'>
    <motion.span 
    initial={{opacity:0, scale:0.5}}
    animate={{opacity:1, scale:1}}
    transition={{duration:.5}}
    >Aman Dav</motion.span>
    <div className='social'>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=100091812829019'><img src='/facebook.png' alt=''/></a>
        <a target='_blank' href='https://www.instagram.com/amanu.tb/'><img src='/instagram.png' alt=''/></a>
        <a target='_blank' href='https://www.linkedin.com/in/amanuel-tamirat-8ba891243/'><img src='/LinkedIn_icon.svg.png' alt=''/></a>
       
    </div>
</div>

    </div>
  )
}

export default Navbar