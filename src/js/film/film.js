// import { getCurrentGenres } from '../modal-form';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  remove,
} from 'firebase/database';

export class Film {
  static createWithoutAuth(newFilm, folder) {
    const all = getFilmsFromLocalStorage(folder);
    all.push(newFilm);
    localStorage.setItem(`${folder}`, JSON.stringify(all));
  }
  static removeWithoutAuth(filmId, folder) {
    const index = findFilmById(filmId, folder);
    const filmsList = getFilmsFromLocalStorage(folder);
    filmsList.splice(index, 1);
    localStorage.setItem(`${folder}`, JSON.stringify(filmsList));
  }

  static removeWithAuth(filmId, folder, userName) {
    const db = getDatabase();
    Film.removeWithoutAuth(filmId, folder);
    remove(ref(db, `UsersList/${userName}/${folder}/` + `${filmId}`));
  }

  static createWithtAuth(newFilm, folder, userName) {
    const db = getDatabase();
    const dbRef = ref(db);
    Film.createWithoutAuth(newFilm, folder);
    set(ref(db, `UsersList/${userName}/${folder}/` + `${newFilm.id}`), {
      release_date: newFilm.release_date,
      genres: newFilm.genres,
      id: newFilm.id,
      poster_path: newFilm.poster_path,
      title: newFilm.title,
      vote_average: newFilm.vote_average,
    }).catch(console.log);
  }

  static renderWatchedFilms(folder, rewWords) {
    const films = getFilmsFromLocalStorage(folder);
    console.log(films.length);
    const imgNoFilmsFound = require('../../images/sad-face.png');

    const list = films.length
      ? films.map(createOneFilmCard).join('')      
      : `<li class="card__film card__film--no-active">
          <div class="thump">
            <img  src="${imgNoFilmsFound}" alt="sad-face" />
          </div>

          <p class="card__text">
            You don't have any ${rewWords} movies yet      
          </p>
        </li>`;
    document.querySelector('.library-list').innerHTML = list;   
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
  static setCurrentUserFilmList(userName) {
    const db = getDatabase();
    const dbRef = ref(db);

    get(child(dbRef, `UsersList/${userName}/` + 'watchedFilms')).then(
      snapshot => {
        if (snapshot.exists()) {
          localStorage.setItem(
            'watchedFilms',
            JSON.stringify(dbDataHandler(snapshot.val()))
          );
        }
      }
    );

    get(child(dbRef, `UsersList/${userName}/` + 'queueFilms')).then(
      snapshot => {
        if (snapshot.exists()) {
          localStorage.setItem(
            'queueFilms',
            JSON.stringify(dbDataHandler(snapshot.val()))
          );
        }
      }
    );
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

function dbDataHandler(data) {
  let list = [];
  for (const key in data) {
    const element = data[key];
    list.push(element);
  }
  return list;
}
