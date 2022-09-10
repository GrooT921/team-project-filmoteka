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
