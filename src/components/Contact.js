import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// icons
import { AiOutlineCheckCircle, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'; 
import { FaDownload } from 'react-icons/fa'; // Importing the download icon

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('rma1214', 'rma1214temp', form.current, '-ByA1eilThcvjHY0b')
      .then(
        () => {
          setMessageStatus('SUCCESS! Your message has been sent.');
        },
        (error) => {
          setMessageStatus('FAILED... Something went wrong. Please try again later.');
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (messageStatus) {
      const timer = setTimeout(() => {
        setMessageStatus('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messageStatus]);

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto w-full'>
        <div className='flex flex-col lg:flex-row mt-[150px]'>
          {/* Contact Info */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col justify-start items-start space-y-4 mb-8 lg:mb-0 lg:pr-8'
          >
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Thank You for Visiting!
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's Stay in <br /> Touch!
            </h2>

            {/* Email Info */}
            <div className='flex items-center space-x-2'>
              <AiOutlineMail className='text-accent' size={24} />
              <span className='text-white'>rosmyantony87@gmail.com</span>
            </div>

            {/* Phone Info */}
            <div className='flex items-center space-x-2'>
              <AiOutlinePhone className='text-accent' size={24} />
              <span className='text-white'>+201-893-6313</span>
            </div>

            {/* Location Info */}
            <div className='flex items-center space-x-2'>
              <AiOutlineEnvironment className='text-accent' size={24} />
              <span className='text-white'>Livingston, NJ, USA</span>
            </div>

            {/* Download Resume */}
            <div className='flex items-center space-x-2 mt-4'>
              <FaDownload className='text-accent' size={24} />
              <a 
                href='https://pdf.ac/1xbIA0' // Replace with the actual URL of your resume
                download
                className='text-white'
              >
                Download My Resume
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              name="user_name"
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your Email'
              name="user_email"
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              name="message"
              required
            ></textarea>
            <button className='btn btn-lg' type="submit">Send Message</button>
          </motion.form>
        </div>

        {/* Notification message */}
        {messageStatus && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2'
          >
            <AiOutlineCheckCircle size={24} />
            <span>{messageStatus}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
