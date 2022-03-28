// import { useEffect, useState } from "react"
// import { createSearchParams, useSearchParams } from "react-router-dom"

// const Search = () => {

//     const [personajes, setPersonajes] = useState([])
//     const [searchParams, setSearchParams] = useSearchParams({
//         query: ""
//     })

//    useEffect(() => {
//        fetch(`https://rickandmortyapi.com/api/character?name=${searchParams.get("query")}`)
//        .then(res => res.json())
//        .then(data => {
//            setPersonajes(data.results)
//        })
//    }), {searchParams}

//     const handleChange = (e) => {
//         setSearchParams({
//             query: e.target.value
//         })
//     }

//     return (
//         <div>
//             <h1>Search</h1>
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 value={searchParams.get("query")}
//             ></input>
//         </div>
//     )
// }


// export default Search;