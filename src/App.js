import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Populares from "./components/Populares";
import BuscadorPeliculas from "./components/BuscadorDePeliculas";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import DetallePelicula from "./components/DetallePelicula"




const App = () => {
  return (

    <BrowserRouter>
      <Nav>



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/BuscadorPeliculas" element={<BuscadorPeliculas />} />
          <Route path="/detallePelicula/:idPelicula" element={<DetallePelicula />} />
        </Routes>
      </Nav>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
