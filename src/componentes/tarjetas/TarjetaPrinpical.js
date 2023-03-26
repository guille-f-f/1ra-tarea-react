import React from "react";
import Imagen from "./tarjetas-componenetes/TarjetaPrincipalImagen"
import Titulo from "./tarjetas-componenetes/TarjetaPrincipalTitulo"
import Texto from "./tarjetas-componenetes/TarjetaPrincipalTexto"
import Boton from "../boton/Boton";
import "../../hojas-de-estilo/TarjetaPrincipal.css";

const TarjetaPrincipal = ({ props }) => {
  return (
    <div className="contenedor--tarjeta">
      <div className={`tarjeta ${props.clase}`}>

        <Imagen 
          imagen={props.imagen} />

        <Titulo
          titulo={props.titulo} />

        <Texto 
          claseTexto={props.claseTexto}
          texto={props.texto} />

        <Boton
          textoDeBoton={props.textoDeBoton}
          claseLogo={props.claseLogo}
          claseBoton={props.claseBoton}
          parametroBoton={props.parametroBoton} />

      </div>
    </div>
  )
};

export default TarjetaPrincipal;