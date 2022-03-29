import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >

        <Button color="grey">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}> Home </Link>
        </Button>

        <Button>
          <Link to="/ultimos-lanzamientos" style={{ textDecoration: "none", color: "white" }}>Ultimos Lanzamientos</Link>
        </Button>

        <Button>
          <Link to="/populares" style={{ textDecoration: "none", color: "white" }}>Populares </Link>
        </Button>

        <Button>
          <Link to="/BuscadorPeliculas" style={{ textDecoration: "none", color: "white" }}>Buscar</Link>
        </Button>

      </AppBar>
    </Box>
  )



}

export default Nav;