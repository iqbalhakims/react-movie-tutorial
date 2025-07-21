import MovieCard from "../components/MovieCard";

function Homes () {

    const movies = [
        {id: 1, title: "John Wick", release_date: "2025" },
        {id: 2, title: "Terminator", release_date: "2022" },
        {id: 3, title: "Big short", release_date: "2021" },
        {id: 4, title: "Narcos", release_date: "2026" }


    ];
    const handleSearch = () =>{};


    return ( <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
            type="text"
            placeholder="search for movies..."
            className="search-input"
            /> 
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>

    </div>
    );

   }

export default Homes