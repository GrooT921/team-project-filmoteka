import axios from 'axios';

async function getMovieDetails(api_key, movie_id) {
  try {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default getMovieDetails;
