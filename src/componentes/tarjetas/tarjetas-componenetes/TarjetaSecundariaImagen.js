import React from "react";


const TarjetaSecundariaImagen = ({ claseImagen, imagen }) => {
  return (
    <img
      className={`tarjetaSecundaria__imagen ${claseImagen}`}
      src={require(`../../../imagenes/${imagen}.png`)}
      alt="Imagen de tarjeta" />
  )
};

export default TarjetaSecundariaImagen;
