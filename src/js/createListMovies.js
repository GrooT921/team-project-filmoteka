import getGenres from './fetches/getGenres';
import API_KEY from './apiKey';

const cardCollection = document.querySelector('.card__colection');

function listMovies(list) {
  getGenres(API_KEY).then(genres => {
    cardCollection.innerHTML = '';
    const movies = list
      .map(movie => {
        const img =
          'https://raw.githubusercontent.com/GrooT921/team-project-filmoteka/main/src/images/no-images-found.png';
        const genresName = movie.genre_ids
          .map(genreId => genres.filter(el => el.id === genreId)[0])
          .map(el => el.name);
        const genresNameDotted =
          genresName.length > 2
            ? genresName.slice(0, 2).join(', ') + ' ...'
            : genresName.join(', ');
        const year = new Date(movie.release_date).getFullYear();
        return `<li class="card__film" data-id='${movie.id}'>
        <div class="thumb">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
          movie.title
        }" onerror='this.src="${img}"'/>
        </div>
        <h2 class="card__title">${movie.title}</h2>
        <p class="card__text">
          <span class="genres">${genresNameDotted}</span> | <span class="release">${year}</span> <span
            class="card__vote_average">${movie.vote_average.toFixed(1)}</span>
        </p>
      </li>`;
      })
      .join('');
    cardCollection.insertAdjacentHTML('beforeend', movies);
  });
}
export default listMovies;
