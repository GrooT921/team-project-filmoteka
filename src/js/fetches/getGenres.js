import axios from 'axios';

async function getGenres(api_key) {
  try {
      const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
    );

    return response.data.genres;
  } catch (error) {
    console.error(error);
  }
}

export default getGenres;