import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <nav className="nav centrado">
            <span className="img-pochoclo">🍿</span>
            <Link className="nav-items" to="/">HOME</Link>
            <Link className="nav-items" to="/ultimosLanzamientos">ULTIMOS LANZAMIENTOS</Link>
            <Link className="nav-items" to="/populares"> PELICULAS POPULARES</Link> 
        </nav>
    )
}

export default Nav;