import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';



const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar sx={{ p:1 }}>
        <LocalActivityIcon
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </LocalActivityIcon>
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
        </Toolbar>


      </AppBar>
    </Box>
  )



}

export default Nav;