import React from "react";


const TarjetaPrincipalImagen = ({ imagen }) => {
  return (
    <img
      className="tarjeta__imagen"
      src={require(`../../../imagenes/${imagen}.png`)}
      alt="Imagen de tarjeta" />
  )
};

export default TarjetaPrincipalImagen;