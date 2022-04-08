import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const UltimosLanzamientos = () => {
    const [UltimosLanzamientos, setUltimosLanzamientos] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d2db916ed787e45a269779c746706c07&language=en-US")
            .then(res => res.json())
            .then(data => setUltimosLanzamientos(data.results))
    }, [])


    return (
        <div className="flex-wrap centrado">
            {UltimosLanzamientos.map((pelicula) => (
                <div className="tarjeta margen-tarjetas centrado-columnas">
                    <div>
                        <img className="tarjeta-imagen" src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} alt=""></img>
                    </div>
                    <div>
                        <h3 className="tarjeta-titulo">{pelicula.title}</h3></div>
                    <Link to={`/UltimosLanzamientos/${pelicula.id}`}>

                        <div>
                            <button className="tarjeta-boton">+</button>
                        </div>
                    </Link>
                </div>))}
        </div>
    )
}

export default UltimosLanzamientos;

