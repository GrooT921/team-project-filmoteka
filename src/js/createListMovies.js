import getGenres from "./fetches/getGenres";
import API_KEY from "./apiKey";

const cardCollection = document.querySelector('.card__colection');

function listMovies(list) {
    getGenres(API_KEY).then(genres => {
        console.log(genres);
    })
  const movies = list
    .map(movie => {
    //   console.log(movie);
        cardCollection.innerHTML = '';
        const year = (new Date(movie.release_date)).getFullYear()
        console.log(year);
      return `<li class="card__film">
        <div class="thumb">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        </div>
        <h2 class="card__title">${movie.title}</h2>
        <p class="card__text">
          <span class="genres">${movie.genre_ids.join(', ')}</span> | <span class="release">${year}</span> <span
            class="card__vote_average">${movie.vote_average}</span>
        </p>
      </li>`;
    })
    .join('');
  cardCollection.insertAdjacentHTML('beforeend', movies);
}
export default listMovies;

{
  /* <li class="card__film">
  <div class="thumb">
    <img src="./images/template.jpg" alt="example" />
  </div>
  <h2 class="card__title">Greyhound</h2>
  <p class="card__text">
    <span class="genres">Drama, Actions</span> | <span class="release">2020</span> <span
      class="card__vote_average">10.0</span>
  </p>
</li> */
}

// function listImages(photos) {
//     const images = photos
//       .map(photo => {
//         return `
//           <a class="gallery-item" href="${photo.largeImageURL}">
//           <div class="photo-card">
//           <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
//           <div class="info">
//             <p class="info-item">
//               <b>Likes</b>
//               ${photo.likes}
//             </p>
//             <p class="info-item">
//               <b>Views</b>
//               ${photo.views}
//             </p>
//             <p class="info-item">
//               <b>Comments</b>
//               ${photo.comments}
//             </p>
//             <p class="info-item">
//               <b>Downloads</b>
//               ${photo.downloads}
//             </p>
//           </div>
//         </div>
//         </a>
//         `;
//       })
//       .join('');
//     gallery.insertAdjacentHTML('beforeend', images);
//     lightbox.refresh();
//   }
