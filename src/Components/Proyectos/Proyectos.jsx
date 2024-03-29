import React from "react";
import "./Proyectos.css";
import ImaProy1 from "../../image/imagen-proyecto.jpg";
import NET from "../../image/csharp.png";
import TYPES from "../../image/types.png";
import CLOUD from "../../image/aws.png";


const Proyectos = ({motion}) => {
  return (
    <div className="proyectos" id="Proyectos">
      <div>
        <h2>Proyectos</h2>
      </div>
      {/* Estructura de cada proyecto */}
      <motion.div
      initial={{opacity:0,x:50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1}}
      
      className="proyecto">
        <div className="proyecto-detalle">
          <div>
            <h2>Desarrollo Web</h2>
            <h3>
              Cliente: <span>Construcora Hurue</span>
            </h3>
            <h3>Descripcion proyecto</h3>
            <p>
              una empresa que se dedica a la ejecución de proyectos públicos y
              privados, principalmente contratos del sector público en la
              Dirección de Obras Hidráulicas, del Ministerio de Obras Públicas y
              también proyectos con Municipalidades en el país.{" "}
            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={NET} />
            </div>
            <div className="tec1">
              <img src={TYPES} />
            </div>
            <div className="tec1">
              <img src={CLOUD} />
            </div>
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={ImaProy1} />
        </div>
      </motion.div>



      <motion.div
      initial={{opacity:0,x:50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1}}
      className="proyecto">
        <div className="proyecto-detalle">
          <div>
            <h2>Desarrollo Web</h2>
            <h3>
              Cliente: <span>Construcora Hurue</span>
            </h3>
            <h3>Descripcion proyecto</h3>
            <p>
              una empresa que se dedica a la ejecución de proyectos públicos y
              privados, principalmente contratos del sector público en la
              Dirección de Obras Hidráulicas, del Ministerio de Obras Públicas y
              también proyectos con Municipalidades en el país.{" "}
            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={NET} />
            </div>
            <div className="tec1">
              <img src={TYPES} />
            </div>
            <div className="tec1">
              <img src={CLOUD} />
            </div>
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={ImaProy1} />
        </div>
      </motion.div>


    </div>
  );
};

export default Proyectos;
