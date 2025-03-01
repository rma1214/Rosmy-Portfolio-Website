import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// icons
import { AiOutlineCheckCircle, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'; 
import { FaDownload, FaGift } from 'react-icons/fa'; // Import the gift icon

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

  // Function to trigger resume download
  const handleResumeDownload = (e) => {
    e.preventDefault(); // Prevents default link behavior
    const link = document.createElement("a");
    link.href = "/WEBSITE_RESUME.pdf"; // Ensure this file is inside the public folder
    link.download = "WEBSITE_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

            {/* Contact Details */}
            <div className='flex flex-col space-y-4'>
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

              {/* Download Resume Button (Both icon & text trigger download) */}
              <div 
                className='flex items-center space-x-2 pt-2 cursor-pointer' 
                onClick={handleResumeDownload} // Clicking either icon or text downloads resume
              >
                <FaDownload className='text-accent' size={24} />
                <span className='text-white'>Download My Resume</span>
              </div>

              {/* Present Icon with "Click Me!" (Properly aligned) */}
              <motion.a
                href="https://youtu.be/i0NpeozXPD0" // YouTube link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 pt-2 cursor-pointer"
                animate={{ rotate: [0, 2, -2, 2, -2, 0] }} // Soft shake effect
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} // Slower and smooth
              >
                <FaGift className="text-accent" size={24} />
                <span className="text-white">Click Me!</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
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
