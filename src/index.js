import './js/fetchMovies'
import './sass/index.scss';
import {
  renderCurrentUserName,
  addEventListenerOnExitBtn,
} from './js/utils/authentefication';
import { toggleModal, closeGoitModal } from './js/goit-modal';
import openModal from './js/authorization-modal';
import closeModal from './js/authorization-modal';
import './js/modal-form';
import toggleRegisterModal from './js/authorization-modal';

// Отображение аккаунта

window.addEventListener('load', () => {
  if (localStorage.getItem('userData') !== null) {
    renderCurrentUserName();
    document.getElementById('sign-out-btn').addEventListener('click', () => {
      localStorage.removeItem('userData');
      localStorage.removeItem('watchedFilms');
      localStorage.removeItem('queueFilms');
      document.querySelector('.modal-open-btn').classList.remove('hidden');
      document.getElementById('user-name-contain').innerHTML = '';
    });
  }
});
