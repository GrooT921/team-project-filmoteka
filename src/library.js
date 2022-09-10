import { Film } from './js/film/film';
import { libBtnsHandler } from './js/utils/libBtnSwitch';
import { openModal, closeModal } from './js/authorization-modal';
import {
  renderCurrentUserName,
  addEventListenerOnExitBtn,
} from './js/utils/authentefication';
import './js/modal-form';
const libRefs = {
  libBtnsContainer: document.querySelector('.library__btn-list'),
};

window.addEventListener('load', () => {
  libRefs.libBtnsContainer.addEventListener('click', libBtnsHandler);
  if (sessionStorage.getItem('userData') !== null) {
    Film.setCurrentUserFilmList(
      JSON.parse(sessionStorage.getItem('userData')).userName
    );
    document.querySelector('.library__btn').classList.contains('active__btn')
      ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
      : Film.renderWatchedFilms('queueFilms', 'запланированных');
    renderCurrentUserName();
    addEventListenerOnExitBtn();
  } else {
    Film.renderWatchedFilms('watchedFilms', 'просмотренных');
  }
});
