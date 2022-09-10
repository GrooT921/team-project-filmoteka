import { Film } from '../film/film';

export function actionWatch(evt, filmData) {
  //   console.log(evt.target.dataset.action);
  if (evt.target.dataset.action === 'add') {
    Film.createWithoutAuth(filmData, 'watchedFilms');
    evt.target.textContent = 'Remove from watched';
    evt.target.dataset.action = 'remove';
  } else {
    console.log(filmData.id);
    Film.removeWithoutAuth(filmData.id, 'watchedFilms');
    evt.target.textContent = 'Add to watched';
    evt.target.dataset.action = 'add';
  }
}

export function actionQueue(evt, filmData) {
  if (evt.target.dataset.action === 'add') {
    Film.createWithoutAuth(filmData, 'queueFilms');
    evt.target.textContent = 'Remove from queue';
    evt.target.dataset.action = 'remove';
  } else {
    console.log(filmData.id);
    Film.removeWithoutAuth(filmData.id, 'queueFilms');
    evt.target.textContent = 'Add to queue';
    evt.target.dataset.action = 'add';
  }
}
