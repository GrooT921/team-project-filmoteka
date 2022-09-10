import axios from 'axios';

async function getSearch(keyWord, api_key, page) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${keyWord}&page=${page}&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getSearch;