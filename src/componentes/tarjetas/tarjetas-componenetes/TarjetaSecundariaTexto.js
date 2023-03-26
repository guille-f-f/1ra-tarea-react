import React from "react";

const TarjetaSecundariaTexto = ({ claseTexto, texto }) => {
  return (
    <p className={`tarjetaSecundaria__texto ${claseTexto}`}>
      {texto}
    </p>
  )
};

export default TarjetaSecundariaTexto;
