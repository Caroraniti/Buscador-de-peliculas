import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main"

const App = () => {
  return (

    <BrowserRouter>
      <Nav>
        <Routes>
          <Route path="/" element={< Main />} />

        </Routes>

      </Nav>


    </BrowserRouter>
  )
}

export default App;

