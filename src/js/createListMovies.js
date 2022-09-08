import getGenres from './fetches/getGenres';
import API_KEY from './apiKey';

const cardCollection = document.querySelector('.card__colection');

function listMovies(list) {
  getGenres(API_KEY).then(genres => {
    cardCollection.innerHTML = '';
    const movies = list
      .map(movie => {
        const genresName = movie.genre_ids
          .map(genreId => genres.filter(el => el.id === genreId)[0])
          .map(el => el.name)
          .join(', ');

        const year = new Date(movie.release_date).getFullYear();
        return `<li class="card__film">
        <div class="thumb">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        </div>
        <h2 class="card__title">${movie.title}</h2>
        <p class="card__text">
          <span class="genres">${genresName}</span> | <span class="release">${year}</span> <span
            class="card__vote_average">${movie.vote_average}</span>
        </p>
      </li>`;
      })
      .join('');
    cardCollection.insertAdjacentHTML('beforeend', movies);
  });
}
export default listMovies;
