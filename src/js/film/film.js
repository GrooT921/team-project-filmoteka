// import { getCurrentGenres } from '../modal-form';

export class Film {
  static createWithoutAuth(newFilm, folder) {
    const all = getFilmsFromLocalStorage(folder);
    all.push(newFilm);
    localStorage.setItem(`${folder}`, JSON.stringify(all));
  }
  static removeWithoutAuth(filmId, folder) {
    const index = findFilmById(filmId, folder);
    console.log(index);
    const filmsList = getFilmsFromLocalStorage(folder);
    filmsList.splice(index, 1);
    localStorage.setItem(`${folder}`, JSON.stringify(filmsList));
  }

  static renderWatchedFilms(folder, rewWords) {
    const films = getFilmsFromLocalStorage(folder);
    const list = films.length
      ? films.map(createOneFilmCard).join('')
      : `<p style="text-align: center;">У вас ещё нету ${rewWords} фильмов :(</p>`;
    document.querySelector('.card__colection').innerHTML = list;
  }

  static isFilmExistInWatched(filmId) {
    if (findFilmById(filmId, 'watchedFilms') === -1) {
      return ['add', 'Add to watched'];
    } else {
      return ['remove', 'Remove from watched'];
    }
  }

  static isFilmExistInQueue(filmId) {
    if (findFilmById(filmId, 'queueFilms') === -1) {
      return ['add', 'Add to queue'];
    } else {
      return ['remove', 'Remove from queue'];
    }
  }
}

function getFilmsFromLocalStorage(folder) {
  return JSON.parse(localStorage.getItem(`${folder}`) || '[]');
}

function findFilmById(filmId, folder) {
  const filmsList = getFilmsFromLocalStorage(folder);
  return filmsList.findIndex(film => film.id === filmId);
}

function getCurrentGenres(genreList) {
  return genreList.map(singleGenre => {
    return singleGenre.name;
  });
}

function createOneFilmCard(film) {
  const img =
    'https://raw.githubusercontent.com/GrooT921/team-project-filmoteka/main/src/images/no-images-found.png';
  const year = new Date(film.release_date).getFullYear();
  const genresName = getCurrentGenres(film.genres);
  const genresNameDotted =
    genresName.length > 2
      ? genresName.slice(0, 2).join(', ') + ' ...'
      : genresName.join(', ');
  return `<li class="card__film" >
        <div class="thumb" data-id='${film.id}'>
          <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${
    film.title
  }" onerror='this.src="${img}"'/>
        </div>
        <h2 class="card__title">${film.title}</h2>
        <p class="card__text">
          <span class="genres">${genresNameDotted}</span> | <span class="release">${year}</span> <span
            class="card__vote_average">${film.vote_average.toFixed(1)}</span>
        </p>
      </li>`;
}
