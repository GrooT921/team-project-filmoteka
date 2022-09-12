import { Film } from '../film/film';

export default function exitBtnHandler() {
  localStorage.removeItem('userData');
  localStorage.removeItem('watchedFilms');
  localStorage.removeItem('queueFilms');
  document.querySelector('.library__btn').classList.contains('active__btn')
    ? Film.renderWatchedFilms('watchedFilms', 'watched')
    : Film.renderWatchedFilms('queueFilms', 'scheduled');

  document.querySelector('.modal-open-btn').classList.remove('hidden');
  document.getElementById('user-name-contain').innerHTML = '';
}
