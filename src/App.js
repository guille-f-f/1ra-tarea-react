import "./App.css";
import TarjetaPrincipal from "./componentes/tarjetas/TarjetaPrinpical";
import TarjetaSecundaria from "./componentes/tarjetas/TarjetaSecundaria";
import ContenidoDeTarjetasPrincipales from "./datos/TarjetasPrincipales.json";
import ContenidoDeTarjetasSecundarias from "./datos/TarjetasSecundarias.json";

function App() {
  return (
    <div className="App">
      <h2 className="titulo">Hablanos</h2>
      <section className="seccion--tarjetas">
        <div className="contenedor__tarjetasPrincipales">
          {ContenidoDeTarjetasPrincipales.map((producto) => (
            <TarjetaPrincipal props={producto} />
          ))}
        </div>

        <div className="contenedor__tarjetasSecundarias">
          {ContenidoDeTarjetasSecundarias.map((producto) => (
            <TarjetaSecundaria props={producto} />
          ))}
        </div>
        
      </section>
    </div>
  )
};

export default App;
