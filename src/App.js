import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import Search from "./components/Search";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="busqueda" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
