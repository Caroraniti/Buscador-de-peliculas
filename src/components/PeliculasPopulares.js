import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PeliculasPopulares = () => {
  const [PeliculasPopulares, setPeliculasPopulares] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d2db916ed787e45a269779c746706c07&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPeliculasPopulares(data.results));
  }, []);

  return (
    <div className="flex-wrap centrado">
      {PeliculasPopulares.map((pelicula) => (
        <div className="tarjeta margen-tarjetas centrado-columnas">
          <div>
            <img
              className="tarjeta-imagen"
              src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              alt=""
            ></img>
          </div>
          <div>
            <h3 className="tarjeta-titulo">{pelicula.title}</h3>
          </div>
          <Link to={`/populares/${pelicula.id}`}>
            <div>
              <p className="tarjeta-boton">+</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PeliculasPopulares;