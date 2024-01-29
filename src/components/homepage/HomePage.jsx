import './HomePage.scss';

import './../AnimatedLetters/AnimatedLetters.scss';
import 'animate.css';
import { motion } from 'framer-motion';
import img from "./../../assets/photo1.png"
import Anim from './../education/Anim'



const slidingVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};


function HomePage() {



  const sentence = "SIBIN".split("");


  return (



    <div className='container homepage'>
      <motion.div className='text-area'
       initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
         
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <h1>
          <span className='hi'> <span className='hLett'>h</span>i,</span><br />
          <span className='iam'> I'am </span>
          <span className='last'>          {
            sentence.map((letter, index) => {
              return (
                <Anim size={80} spacing={'2mm'} font={'Caveat'} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </Anim>
              )
            })
          }
          </span>

        </h1>

      </motion.div>
      <motion.div className='job' initial={{opacity:0}} animate={{opacity:0.2}} transition={{delay:1,duration:1}} >
        Software Engineer
      </motion.div>

      <motion.div className='slidingtext' variants={slidingVariants} initial='initial' animate='animate'>
        SIBIN KRISHNA K T
      </motion.div>


      <div className='img-area'>
        <motion.div className='svgLogo' initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1, duration: 1 }}>
          <svg width="600px" height="600px" viewBox="0 0 48 48">
            <motion.circle
              fill='none'
              variants={{
                initial: { strokeDasharray: '132.64' },
                animate: { strokeDasharray: '0' },
              }}
              initial="initial"
              animate="animate"
              transition={{ duration: 2 }}
              stroke-width='.1'

              cx="24"
              cy="24"
              r="20"
            />
          </svg>
        </motion.div>
        <motion.div className='imgLogo' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} style={{
          'background-image':
            `url(${img})`
        }}  >


        </motion.div>

      </div>

    </div>

  );
}

export default HomePage;
