import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Programming Languages',
    description: 'HTML, CSS, JavaScript, & React JS',
  },
  {
    name: 'Development',
    description: 'Front-End',
  },
  {
    name: 'Tools',
    description: 'Figma, Tailwind CSS, & Framer Motion',
  },
  {
    name: 'Soft Skills',
    description:
      'Team Collaboration, Time Management, Critical Thinking, Communication, & Detail Orientation',
  },
];

const Services = () => {
  return (
    <section className='section pt-20' id='services'> {/* Added pt-20 for padding */}
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-[-15px]'>My Skills</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              {/* You can add more details here */}
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px] h-full'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      {/* Removed link rendering */}
                    </div>
                  </div>
                );
              })}
              <div className='h-[146px] mb-[38px] flex' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
