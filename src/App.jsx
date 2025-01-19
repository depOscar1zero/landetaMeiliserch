import React from "react";
import reactLogo from "./assets/movie.svg";
import "./App.css";
import  MeiliSearch  from "./components/meiliSearch";

const App = () => {

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
          <h1>Soy Oscar Landeta</h1>
          <h1>Te ayudare a buscar tu pelicula :D</h1>
        </div>
      </div>
      <MeiliSearch className="input-container"/>
      
    </>
  );
};

export default App;
