import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className={`flex-1 transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`} // Control the opacity of the entire text block
          >
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>
              I’m a junior at NJIT, pursuing a computer science degree with a minor in UX/UI, 
              interested in web development and front-end development.
            </h3>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <span className="text-sm italic">
                    "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so  <br />
                    well that the design is invisible."
                  </span>
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Donald Arthur<br />
                  Norman
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'></div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'></div>
                <div className='font-primary text-sm tracking-[2px]'></div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
