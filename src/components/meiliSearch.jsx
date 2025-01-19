import React, {useState} from "react";
import client from "./cliente";

const MeiliSearch = () => {
    const [serch, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const index = await client.index("movies").search(serch);
        setMovies(index.hits);
    }

    return(
        <div>
            <form onSubmit={searchMovies}>
                <input type="text" placeholder="Busca tu pelicula" value={serch} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Buscar Ahora</button>
            </form>
        </div>
    );
};

export default MeiliSearch;