import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../image/logo_upcode.png";
import { Link } from "react-scroll";
import Proyectos from "../Proyectos/Proyectos";
import { AnimatePresence } from "framer-motion";

const Navbar = ({ motion }) => {

    const [open, setOpen] = useState(false);
    const [openValor, setOpenValor] = useState(0);

    const fnCambiar =(valor,num)=>{
        setOpen(valor)
        setOpenValor(num);


    }
  return (
    <div className="navbar" id="navbar">
      <header>
        <div>
          <AnimatePresence initial={true}>
            <motion.img
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0,10,0,0] }}
              transition={{repeat:2, duration:1}}
              src={logo}
            />
          </AnimatePresence>
        </div>
        <div>
          <motion.nav
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
          >
            <ul>
              <Link spy={true} to="Somos" smooth={true}>
                <li
                onMouseEnter={()=>fnCambiar(true,1)}
                onMouseLeave={()=>setOpen(false)}
                >
                  ¿Quiénes Somos?
                  <span
                    style={{
                      width: "140px",
                      height: "3px",
                      backgroundColor: "#f18c1a",
                      position: "absolute",
                      transform: open && openValor ===1? "scaleX(1)" : "scaleX(0)",
                      top:'60px',
                      left:'0px',
                      transformOrigin:'left',
                      transition:"transform .2s ease"
                    }}
                  />
                </li>
              </Link>
              <Link spy={true} to="Hacemos" smooth={true}>
                <li
                onMouseEnter={()=>fnCambiar(true,2)}
                onMouseLeave={()=>setOpen(false)}
                >¿Qué hacemos?
                <span
                    style={{
                      width: "125px",
                      height: "3px",
                      backgroundColor: "#f18c1a",
                      position: "absolute",
                      transform: open && openValor ===2 ? "scaleX(1)" : "scaleX(0)",
                      top:'60px',
                      left:'160px',
                      transformOrigin:'left',
                      transition:"transform .2s ease"
                    }}
                  />
                </li>
              </Link>
              <Link spy={true} to="Vision" smooth={true}>
                <li
                onMouseEnter={()=>fnCambiar(true,3)}
                onMouseLeave={()=>setOpen(false)}
                >Nuestra visión
                <span
                    style={{
                      width: "115px",
                      height: "3px",
                      backgroundColor: "#f18c1a",
                      position: "absolute",
                      transform: open && openValor ===3 ? "scaleX(1)" : "scaleX(0)",
                      top:'60px',
                      left:'310px',
                      transformOrigin:'left',
                      transition:"transform .2s ease"
                    }}
                  />
                </li>
              </Link>
              <Link spy={true} to="Proyectos" smooth={true}>
                {" "}
                <li>Proyectos</li>
              </Link>
              <Link spy={true} to="Contactenos" smooth={true}>
                <li>Contáctenos</li>
              </Link>
            </ul>
          </motion.nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
