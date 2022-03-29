

const Home = () => {

    const populares = useFetch(`"https://api.themoviedb.org/3/movie/popular?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1"`)
    return (
        //AGREGO EL CARRUSEL A LA PAGINA PRINCIPAL 
        <Carrusel>

        </Carrusel>
    )
}








export default Home;