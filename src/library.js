import { libBtnsHandler, renderWatchedFilms } from './js/utils/libBtnSwitch';

const libRefs = {
  libBtnsContainer: document.querySelector('.library__btn-list'),
};

window.addEventListener('load', () => {
  renderWatchedFilms('watched', 'просмотренных');
  libRefs.libBtnsContainer.addEventListener('click', libBtnsHandler);
});
