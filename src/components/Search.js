import { createSearchParams, useSearchParams } from "react-router-dom"

const Search = () => {

    const [SearchParams, setSearchParams] = useSearchParams({
        busqueda: ""
    })

    const handleChange = (e) => {
        setSearchParams({
            query: e.target.value
        })
    }

    return (
        <div>
            <h1>Search</h1>
            <input
                type="text"
                onChange={handleChange}
                value={SearchParams.query}
            ></input>
        </div>
    )
}


export default Search;