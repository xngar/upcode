import React from 'react'
import "./Slider.css"
import SliderImg from "../../image/slider-img.png";
import Up from "../../image/up.png";
import {motion} from "framer-motion";

const Slider = () => {
  return (
    <div className='slider'>
        <div className='slider-izq'>
          <motion.h1 
          initial={{opacity:0, x:-100}}
          
          whileInView={{opacity:1, x:0}}
          
          transition={{
            duration:2,
            type:"spring"
          }}
          
          >Hazle un  <img src={Up} /><br/>a tus proyectos</motion.h1>
          <motion.p
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:2,
            type:"spring",
          delay:0.5}}
          
          >Transformamo tus proyectos en realidades digitales cautivadoras. Impulsa tu presencia en línea con nuestras soluciones de vanguardia.</motion.p>
          <motion.button
          initial={{opacity:0}}
          
          animate= {{opacity:1}}
          whileHover={{
            scale:1.2,
            background:"white",
            color:"orange"

          }}
          transition={{
            type:"spring",
            duration:2
          }}
          >Contáctanos</motion.button>
        </div>
        <div className='slider-der'>
          <img src={SliderImg} />
        </div>
    </div>
  )
}

export default Slider