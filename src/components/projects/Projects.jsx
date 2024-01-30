import React, { useRef } from 'react';
import './Projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import app1 from './../../assets/app1.jpg'
import app2 from './../../assets/app2.webp'
import app3 from './../../assets/app3.jpg'
import app5 from './../../assets/app5.avif'
import app4 from './../../assets/app4.avif'


const items = [
    {
        id: 1,
        title: "Bon Voyage",
        img: app1,
        desc: "Bon Voyage is a Travel Planner App designed for globetrotters seeking seamless journeys to diverse destinations. This feature-rich app enables users to effortlessly access up-to-date information on hotels restaurants, and essential helpline services. Built with Flutter and employing Bloc for state management . Bon Voyage's backend is seamlessly powered by Firebase , ensuring a smooth and reliable travel planning experience. Google Map Place Api integration is Done to get all Places in the World",
        link:'https://github.com/krishSibin/Bon-Voyage.git'
      },
    {
        id: 2,
        title: "Money Management App",
        img: app2,
        desc:"This user-friendly application is designed to effortlessly handle your expenses, track income, and provide insightful spending analysis . Stay in control of your finances, understand where your money goes , and make informed decisions for a prosperous future . Simplify your money management journey with this intuitive and essential app",
        link:'https://github.com/krishSibin/Money-Management-App.git'
      },
      {
        id: 3,
        title: "My Portfolio",
        img: app4,
        desc: "This is a complete portfolio website created using React and SCSS",
        link:'https://github.com/krishSibin/MyPortfolio.git',
      },
      {
        id: 4,
        title: "Blog Website",
        img: app5,
        desc: "This project is an innovative blog platform meticulously crafted with React, Express, and MongoDB, delivering a sophisticated and responsive blogging experience. Seamlessly blending the power of React for frontend development, Express for backend operations, and MongoDB for efficient database management, MyBlog offers a dynamic and user-friendly environment",
        link:'https://github.com/krishSibin/MyBlog_website.git'
    },
    {
        id: 5,
        title: "Netflix Clone App",
        img: app3,
        desc: "This project is a Flutter clone of the Netflix Android application, developed using Flutter and Bloc for state management, with API integration done using the Dio package. It follows a Domain Driven Development (DDD) structure."
       , link:'https://github.com/krishSibin/NETFLIX-Project.git'
      },
   
    
];





const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref }); // Separate scroll instance

  const textContainerY = useTransform(scrollYProgress, [0, 1], [100, 0]); // Text animation
  const imageContainerY = useTransform(scrollYProgress, [0, 1], [-50, 0]); // Image animation

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" style={{ y: imageContainerY }}>
            <img src={item.img} alt="" />
           
          </motion.div>
          <motion.div className="textContainer" style={{ y: textContainerY }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.location.href = item.link
            }>Link</button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
     
    </div>
  );
}

export default Projects;




