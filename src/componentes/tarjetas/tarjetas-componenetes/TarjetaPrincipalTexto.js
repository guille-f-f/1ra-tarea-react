import React from "react";

const TarjetaPrincipalTexto = ({claseTexto, texto}) => {
  return (
    <p className={`tarjeta__texto ${claseTexto}`}>{texto}</p>
  )
};

export default TarjetaPrincipalTexto;