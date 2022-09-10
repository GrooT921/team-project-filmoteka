import './sass/index.scss';
// import './js/pagination';

import API_KEY from './js/apiKey';
import getTrending from './js/fetches/getTrending';
import getSearch from './js/fetches/getSearch';
import listMovies from './js/createListMovies';
import toggleModal from './js/goit-modal';
import openModal from './js/authorization-modal';
import closeModal from './js/authorization-modal';

import {showLoader, hideLoader} from './js/loader';

import toggleRegisterModal from './js/authorization-modal';

const refs = {
  currentPage: 1,
  keyWord: '',
  cardCollection: document.querySelector('.card__colection'),
  searchForm: document.querySelector('.search__form')
};

var throttle = require('lodash.throttle');

// Відображення популярних фільмів на головній сторінці
getTrending(API_KEY, 'movie', 'week', refs.currentPage).then(data => {
  listMovies(data.results);
  pagination.reset(data.total_results);
}).then(hideLoader);

// Пагинация
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

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
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
             '</a>'
     }
}

const pagination = new Pagination(container, options);

pagination.on('beforeMove', e => {
  refs.currentPage = e.page;
  getTrending(API_KEY, 'movie', 'week', refs.currentPage).then(data => {
  listMovies(data.results);
  }).then(hideLoader);
});
//Поиск по слову
refs.searchForm.addEventListener('input', throttle(onInputEnter, 500));

function onInputEnter(e) {
  e.preventDefault();
  refs.keyWord = e.target.value;
};

refs.searchForm.addEventListener('submit', throttle(onSubmitBtnClick, 500));

function onSubmitBtnClick(e) {
  e.preventDefault();
  const keyWord = refs.keyWord;
  console.log(keyWord);
  getSearch(keyWord, API_KEY, refs.currentPage).then(data => {
    console.log(data.results);
    listMovies(data.results);
    pagination.reset(data.total_results);
  }).then(hideLoader);
};

function catchError(error) {
   console.error(error);
}
