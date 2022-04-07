import { useState, useEffect } from "react";

//ME DEJO DE FUNCIONAR EL FETCH. VERLO URGENTE 
const Home = () => {
  const [PeliculasPopulares, setPeliculasPopulares] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=d2db916ed787e45a269779c746706c07&language=en-US`)
      .then((res) => res.json())
      .then((data) => setPeliculasPopulares(data.results));
  }, []);

  const [PeliculasMejorPuntuadas, setPeliculasMejorPuntuadas] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d2db916ed787e45a269779c746706c07&language=en-US`)
      .then((res) => res.json())
      .then((data) => setPeliculasMejorPuntuadas(data.results));
  }, []);
  return (
    <>
      {/* <Carousel/> */}
      <div className="centrado flex-wrap">
        <div className="panel-home margen-tarjetas">
          <div className="titulo-tarjeta-home">PELICULAS MEJOR PUNTUADAS</div>
          <div>
            {PeliculasPopulares.map((pelicula) => (
              <div className="flex space-between items-panel-home">
                <p>{pelicula.title}</p>
                <button className="click-icono-tarjeta"> > </button>
              </div>
            ))}
          </div>
        </div>
        <div></div>

        <div className="panel-home margen-tarjetas">
          <div className="titulo-tarjeta-home">PELICULAS POPULARES</div>
          <div>
            {PeliculasMejorPuntuadas.map((pelicula) => (
              <div className="flex space-between items-panel-home">
                <p>{pelicula.title}</p>
                <button className="click-icono-tarjeta"> > </button>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>

    </>
  );
};

export default Home;



