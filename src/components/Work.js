import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import Img4 from '../assets/portfolio-img4.png'; // Twilight Media Image

const Work = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleYaleClick = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  const handlePortfolioClick = () => {
    window.location.reload();
  };

  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        {/* Grid layout for projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Bridal Services Website */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <a href='https://preeminent-caramel-63f624.netlify.app/treatments' target='_blank' rel='noopener noreferrer'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-full'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500' src={Img1} alt='Bridal Services Website' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Next JS, Tailwind CSS & Framer Motion</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Bridal Services Website</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Personal Portfolio - Click to Reload */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-full cursor-pointer' onClick={handlePortfolioClick}>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500' src={Img2} alt='Personal Portfolio' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>React JS, Tailwind CSS, Framer Motion</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Personal Portfolio</span>
              </div>
            </div>
          </motion.div>

          {/* Twilight Media Website Redesign */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <a href='https://www.figma.com/proto/Jexdj6DXbVk95qLpduFwLG/Twilight-Media-WordPress?page-id=0%3A1&node-id=67-17&viewport=-1304%2C156%2C0.29&t=FmgcKRzy9pcfoLyK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A17' target='_blank' rel='noopener noreferrer'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-full'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500' src={Img4} alt='Twilight Media Website Redesign' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Figma</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Twilight Media Website Redesign</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Yale University Art School */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-full' onClick={handleYaleClick}>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500' src={Img3} alt='Yale University Art School' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UX Case Study</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Yale University Art School</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {popupVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
          <div className='bg-accent p-6 rounded-lg shadow-lg text-center text-white max-w-xs'>
            <h3 className='text-lg font-semibold'>Sorry, this project is still in progress!</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
