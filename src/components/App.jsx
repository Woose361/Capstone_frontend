import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Favorites from './Favorites';
import { fetchMovies } from './services/apiService.mjs';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  

  const getMovies = async () => {
    try { 
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (err) {
      console.error("Error fetching movies: ", err);
    }
  };

  getMovies();
}, []);

    // Add movies to favorites
  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
    // Remove movies from favorites
  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  
  };


  return (
    <Router>
    <div className="app">
      <h1>Movie Search App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        </nav>    ter  
       
      <Routes>
        <Route path="/" element={<Form setMovies={setMovies} />}  />
        <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}/>
        <Route path="/movies/:id" element={<MovieDetail addToFavorites={addToFavorites} />} />
        
      </Routes>

      <Route
      path="/" 
      element={<MovieList movies={movies} addToFavorites={addToFavorites} />}
      />
    </div>
    </Router>
  );
};

export default App;
