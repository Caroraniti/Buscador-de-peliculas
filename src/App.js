import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main"
import UltimosLanzamientos from "./components/UltimosLanzamientos"
import Populares from "./components/Populares"

const App = () => {
  return (

    <BrowserRouter>
      <Nav>
        <Routes>
          <Route path="/" element={< Main />} />
          <Route path="/ultimosLanzamientos" element={<UltimosLanzamientos />} />
          <Route path="./populares" element={<Populares />} />
        </Routes>

      </Nav>


    </BrowserRouter>
  )
}

export default App;

