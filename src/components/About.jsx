import React from "react";    
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import profileImage from '../assets/profile.jpg';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";              
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col sm:flex-row items-start sm:items-center">
        <div className="flex-1">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Hello everyone! 👋🏻 I'm JADIR Mohammed, currently pursuing my studies in Big Data, AI, and Data Science Engineering at ENSIASD Taroudant. My passion for technology drives me, especially in the realms of artificial intelligence, web development, and computer science.
            <br className='sm:block hidden' />
            Beyond academics, I actively participate in tech communities and contribute to various projects, constantly seeking to broaden my knowledge and skills.
            <br className='sm:block hidden' />
            Let's connect and share our journey through the dynamic and ever-changing landscape of technology.
            <br className='sm:block hidden' />
            Let's work together to bring your ideas to life!
          </motion.p>
        </div>
        <motion.div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-10">
          <img src={profileImage} alt="Profile" className="w-60 h-80 rounded-full" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
