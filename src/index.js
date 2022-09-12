import './sass/index.scss';
import API_KEY from './js/apiKey';
import getTrending from './js/fetches/getTrending';
import getSearch from './js/fetches/getSearch';
import listMovies from './js/createListMovies';
import {
  renderCurrentUserName,
  addEventListenerOnExitBtn,
} from './js/utils/authentefication';
import { toggleModal, closeGoitModal } from './js/goit-modal';
import openModal from './js/authorization-modal';
import closeModal from './js/authorization-modal';
import './js/modal-form';
import { showLoader, hideLoader } from './js/loader';
import toggleRegisterModal from './js/authorization-modal';
import scrollToTop from './js/utils/scrollToTop';
import { topFunction } from './js/utils/scrollToTop';
import Pagination from 'tui-pagination';

const refs = {
  currentPage: 1,
  keyWord: '',
  cardCollection: document.querySelector('.card__colection'),
  searchForm: document.querySelector('.search__form'),
  alert: document.querySelector('.warning__message'),
};

var throttle = require('lodash.throttle');

// Відображення популярних фільмів на головній сторінці
getTrending(API_KEY, 'movie', 'week', refs.currentPage)
  .then(data => {
    listMovies(data.results);
    pagination.reset(data.total_results);
  })
  .then(hideLoader);

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

// Пагинация
const container = document.getElementById('pagination-container');
const options = {
  totalItems: 20,
  itemsPerPage: 20,
  visiblePages: 3,
  page: refs.currentPage,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

pagination.on('beforeMove', e => {
  refs.currentPage = e.page;
  showLoader();
  getTrending(API_KEY, 'movie', 'week', refs.currentPage)
    .then(data => {
      listMovies(data.results);
    })
    .then(topFunction)
    .then(hideLoader);
});
//Поиск по слову
refs.searchForm.addEventListener('input', throttle(onInputEnter, 500));

function onInputEnter(e) {
  refs.keyWord = e.target.value;
}

refs.searchForm.addEventListener('submit', throttle(onSubmitBtnClick, 500));

function onSubmitBtnClick(e) {
  e.preventDefault();
  const keyWord = refs.keyWord;
  console.log(keyWord);
  showLoader()
  getSearch(keyWord, API_KEY, refs.currentPage)
    .then(data => {
      if (data.results.length !== 0) {
        refs.alert.classList.add('visually-hidden');
        listMovies(data.results);
        pagination.reset(data.total_results);
        refs.searchForm.reset();
      } else {
        refs.alert.classList.remove('visually-hidden');
        refs.searchForm.reset();
      }
    })
    .then(hideLoader);
}

scrollToTop();
