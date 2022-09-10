import { Film } from './js/film/film';
import { libBtnsHandler } from './js/utils/libBtnSwitch';
import { openModal, closeModal } from './js/authorization-modal';

const libRefs = {
  libBtnsContainer: document.querySelector('.library__btn-list'),
};

window.addEventListener('load', () => {
  Film.renderWatchedFilms('watchedFilms', 'просмотренных');
  libRefs.libBtnsContainer.addEventListener('click', libBtnsHandler);
});
