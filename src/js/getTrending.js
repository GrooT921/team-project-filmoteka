import axios from 'axios';

async function getTrending(api_key, media_type, time_window, page=1) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${api_key}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getTrending;
