import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main"
import UltimosLanzamientos from "./components/UltimosLanzamientos"

const App = () => {
  return (

    <BrowserRouter>
      <Nav>
        <Routes>
          <Route path="/" element={< Main />} />
          <Route path="/UltimosLanzamientos" element={<UltimosLanzamientos />} />
        </Routes>

      </Nav>


    </BrowserRouter>
  )
}

export default App;

