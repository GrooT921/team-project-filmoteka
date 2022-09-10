import axios from 'axios';

// async function getMovieDetails(api_key) {
//   try {
//     const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/157386?api_key=${api_key}`
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
// export default getMovieDetails;



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


  
// async function getModalForm(api_key, movie_id) {
//     try {
//         const movie = await axios.get(
//             `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;
//           const response = await movie.data;
//           return response;
//       } catch (error) {
//         if (error.response) {
//           throw new Error(error.response.status);
//         }
//       }
//   }


// 157336
// 157386