import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

// const FEATURED_API = YOUR_KEY
//const SEARCH_API = YOUR_KEY

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) => {
    fetch(API).then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  }

  const handleonChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search" autoComplete="off" value={searchTerm} onChange={handleonChange} />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
