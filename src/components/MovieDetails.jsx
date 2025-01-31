import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/apiService.mjs';


const MovieDetail = ({ addToFavorites }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab881e0e86fe5334e70ca49928474d21`);
        const data = await response.json();
        setMovie(data);
        } catch (err) {
          console.error("Error fetching movie details: ", err);
        } finally {
          setLoading(false);
        }   
        };

        fetchMovieDetails();
        }, [id]);

        if (loading) 
            return <p>Loading movie data...</p>;
        if (!movie) 
            return <p>Movie not found</p>;
        
        return (    
            <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
                <p>{movie.overview}</p>
                <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
            </div>
        );
    };
    export default MovieDetail; 