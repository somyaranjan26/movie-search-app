import React, {useState} from 'react'
import MovieCard from './MovieCard'

const SearchMovies=()=>{

    const [query,setQuery]=useState("")
    const [movies,setMovies]=useState([])
    
    
    const searchMovie = async(e)=>{
            e.preventDefault()
            const url =`https://api.themoviedb.org/3/search/movie?api_key=f6bb9f69072f0d231a0f04b55854335a&language=en-US
            &query=${query}&page=1&include_adult=false`;
            
            try {
                const res = await fetch(url);
                const data  = await res.json();
                setMovies(data.results);
            }catch(err){
                console.error(err);
            }
    }

   

    return(
        <>
        <form className="form" onSubmit={searchMovie}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" placeholder=" i.e. Avengers Endgame" value={query} 
            onChange={(e) => setQuery(e.target.value)}
            className="input"/>
            <button type="submit" className="btn">Search</button>
        </form>
         <MovieCard movies={movies}/>
        </>
    )

}

export default SearchMovies