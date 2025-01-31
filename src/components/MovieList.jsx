import { Link } from 'react-router-dom';

const MovieList = ({ movies, addToFavorites }) => {

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>{movie.overview}</p>
          
          <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
          <Link to={`/movies/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
