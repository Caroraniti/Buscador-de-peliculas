import { Link } from 'react-router-dom'



const Nav = () => {
  return (
    <Div sx={{ flexGrow: 1 }}>
      <AppBar>

        <Link to="/" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation>Home</Button>
        </Link>

        <Link to="/lanzamientos" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation>Ultimos Lanzamientos</Button>
        </Link>

        <Link to="/populares" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation>Populares</Button>
        </Link>

        <Link to="/buscar" className={classes.link}>
          <Button variant="contained" color="primary" disableElevation>Buscar</Button>
        </Link>

      </AppBar>
    </Div>
  )



}

export default Nav;