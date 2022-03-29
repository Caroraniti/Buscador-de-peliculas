import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home"
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import BuscadorDePeliculas from "./components/BuscadorDePeliculas";


const App = () => {
  return (

    <BrowserRouter>
      <Nav>

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/ultimosLanzamientos" element={<UltimosLanzamientos />} />
          <Route path="./populares" element={<Populares />} />
          <Route path="./bucadorDePeliculas" element={<BuscadorDePeliculas />} />
    
        </Routes>

      </Nav>

    <Footer />

    </BrowserRouter>
  )
}

export default App;