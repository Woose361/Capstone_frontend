const Favorites = ({ favorites, removeFromFavorites }) => {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <div className="movie-list">
            {favorites.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <h3>{movie.title}</h3>
                <button onClick={() => removeFromFavorites(movie.id)}>
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Favorites;
  