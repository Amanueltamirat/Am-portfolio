import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import './Contact.scss'
import emailJs from '@emailjs/browser'

const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            taggerChildren:0.1
        }
    }
}


function Contact() {
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)
const ref = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm('service_xzs87si', 'template_is8abuj', ref.current, {
        publicKey: 'IfqGvR-bZ8vq9_NNV',
      })
      .then(
        () => {
          setError(false)
          setSuccess(true)
        },
        (error) => {
            setError(true)
            setSuccess(false)
        },
      );
  };

  return (
    <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
        <motion.div className='textContainer' variants={variants}>
            <motion.h1>Let's work together</motion.h1>
            <motion.div className='item' variants={variants}>
                <h2>Mail</h2>
                <span>amanuel.tamirat22@gmail.com</span>
            </motion.div>
            <motion.div className='item' variants={variants}>
                <h2>Address</h2>
                <span>Soddo, Ethiopia</span>
            </motion.div>
            <motion.div className='item' variants={variants}>
                <h2>Phone</h2>
                <span>+251941728854</span>
            </motion.div>
        </motion.div>
        <div className='formContainer'>
            <form ref={ref} onSubmit={sendEmail}>
                <input type="text" required placeholder='Name' name='name' />
                <input type="email" required placeholder='Email' name='email'/>
                <textarea name="message" rows={8} placeholder='message'></textarea>
                <button>Submit</button>
                {error && 'Error'}
                {success && 'Success' }
            </form> 
        </div>
    </motion.div>
  )
}

export default Contact