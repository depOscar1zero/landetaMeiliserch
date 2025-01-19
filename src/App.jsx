import { useState } from "react";
import reactLogo from "./assets/movie.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container1">
        <div className="logo-container">
          <a href="http://18.227.13.140/" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="text-container">
          <h1>¡Bienvenido!</h1>
          <h2>Soy Oscar Landeta</h2>
          <h2>Te ayudare a buscar tu pelicula :D</h2>
        </div>
      </div>
      <div className="container2">
        <form className="form1">
          <input
            type="text"
            placeholder="Buscar pelicula"
            value=""
            style={{ width: "50%" }}
          ></input>
          <button >
            Buscar Ahora
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
