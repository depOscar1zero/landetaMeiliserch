import React, { useState } from "react";
import client from "../conexion/cliente";
import "../App.css";

const MeiliSearch = () => {
  const [serch, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [poster, setPoster] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();

    const index = await client.index("movies").search(serch);
    setMovies(index.hits);
  };

  return (
    <div className="input-container">
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Escribe la pelicula que quieres buscar"
          value={serch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar Ahora</button>
      </form>

      <div>
        {movies.map((movie) => (
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <img className="img-poster"src={movie.poster}/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MeiliSearch;
