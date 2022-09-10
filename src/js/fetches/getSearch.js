import axios from 'axios';

async function getSearch(keyWord, API, pageNumber) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${keyWord}&page=${pageNumber}&include_adult=false`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getSearch;