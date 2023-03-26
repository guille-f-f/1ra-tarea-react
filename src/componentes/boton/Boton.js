import React from "react";
import "../../hojas-de-estilo/Boton.css";

const Boton = ({claseBoton, claseLogo, textoDeBoton}) => {
  
  return(
    <div className="contenedor--boton">
      <a href="#" className={`contenedor__boton ${claseBoton}`}>
        <span className={`contenedor__logo material-symbols-outlined ${claseLogo}`}>east</span>
        {textoDeBoton}
      </a>
    </div>
  ) 
};

export default Boton;

