import React from "react";
import Imagen from "./tarjetas-componenetes/TarjetaSecundariaImagen"
import Texto from "./tarjetas-componenetes/TarjetaSecundariaTexto"
import Boton from "../boton/Boton";
import "../../hojas-de-estilo/TarjetaSecundaria.css";

const TarjetaSecundaria = ({ props }) => {
  return (
    <div className="contenedor--tarjeta">
      <div className={`tarjetaSecundaria ${props.clase}`}>
        <div className="tarjetaSecundaria__contenedor--imagen">
          <Imagen 
            imagen={props.imagen} 
            claseImagen={props.claseImagen} />
        </div>

        <div className="tarjetaSecundaria__contenedor--texto">
          <Texto 
            claseTexto={props.claseTexto}  
            texto={props.texto} />

          <Boton
            textoDeBoton={props.textoDeBoton}
            claseLogo={props.claseLogo}
            claseBoton={props.claseBoton}
            parametroBoton={props.parametroBoton}
          />
        </div>
      </div>
    </div>
  )
};

export default TarjetaSecundaria;