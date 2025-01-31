const API_KEY = "ab881e0e86fe5334e70ca49928474d21";
const BASE_URL = "https://api.themoviedb.org/3";


 export const fetchAMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`

    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching movies ", err);
    return [];
  } 
};

export const fetchMoviesDetails = async (id) => {
    
  try {
    const response = await fetch (`${BASE_URL}/movie/${id}?api_key=${API_KEY}`

    );
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching movies: ", err);
  return null;
  }
};

  
