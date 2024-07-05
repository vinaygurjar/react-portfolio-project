import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className='awesome'>
          <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
          <span>Services</span>
          <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
          </span>
          <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
          </a>
          <div className='blur s-blur1' style={{background: '#abf1ff94'}}></div>
        </div>
        {/* right side */}
        <div className='cards'>
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "14rem" }}
              transition={transition}             
            >
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </motion.div>
            {/* second card */}
            <motion.div
              initial={{ left: "-11rem", top: "12rem" }}
              whileInView={{ left: "-4rem" }}
              transition={transition}
            >
               <Card
               emoji = {Glasses}
               heading = {'Developer'}
               detail = {'Html, Css, Javascript, React, Figma, Sketch, Photoshop, Adobe, Adobe xd'}
               /> 
            </motion.div>
            {/* 3rd card */}
            <motion.div
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}             
            >
               <Card
               emoji = {Humble}
               heading = {'UI/UX'}
               detail = {'Lorem ispum dummy text are usually use in section where we need some random text'}
               /> 
            </motion.div>
            <div className='blur s-blur2' style={{background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services