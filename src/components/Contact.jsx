import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaPhone, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-8'>
          <p className='text-white font-medium mb-2'>Contact Information:</p><br />
          <ul className='text-white'>
            <li className='flex items-center'><FaEnvelope className='mr-2' /> <a href="mailto:mohamad.jadir2018@gmail.com" className='hover:underline'>mohamad.jadir2018@gmail.com</a></li><br />
            <li className='flex items-center'><FaGithub className='mr-2' /> <a href="https://github.com/Jadir99" target="_blank" rel="noopener noreferrer" className='hover:underline'>https://github.com/Jadir99</a></li><br />
            <li className='flex items-center'><FaInstagram className='mr-2' /> <a href="https://www.instagram.com/jadir_semo/?igsh=cGIyNnhuYm1odmtu" target="_blank" rel="noopener noreferrer" className='hover:underline'>@jadir_semo</a></li><br />
            <li className='flex items-center'><FaPhone className='mr-2' /> <a href="tel:+212682846580" className='hover:underline'>+212682846580</a></li><br />
            <li className='flex items-center'><FaLinkedin className='mr-2' /> <a href="https://www.linkedin.com/in/mohammed-jadir/" target="_blank" rel="noopener noreferrer" className='hover:underline'>https://www.linkedin.com/in/mohammed-jadir/</a></li><br />
            <li className='flex items-center'><FaTwitter className='mr-2' /> <a href="https://x.com/jadir99" target="_blank" rel="noopener noreferrer" className='hover:underline'>https://x.com/jadir99</a></li><br />
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
