import API_KEY from './apiKey';
import getTrending from './fetches/getTrending';
import getSearch from './fetches/getSearch';
import listMovies from './createListMovies';
import Pagination from 'tui-pagination';
import { showLoader, hideLoader } from './loader';
import { topFunction } from './utils/scrollToTop';
import scrollToTop from './utils/scrollToTop';
var throttle = require('lodash.throttle');

const refs = {
  currentPage: 1,
  keyWord: '',
  cardCollection: document.querySelector('.card__colection'),
  searchForm: document.querySelector('.search__form'),
  alertBox: document.querySelector('.alert__container'),
  paginationBox: document.querySelector('.tui-pagination'),
};

// Відображення популярних фільмів на головній сторінці
getTrending(API_KEY, 'movie', 'week', refs.currentPage)
  .then(data => {
    listMovies(data.results);
    pagination.reset(data.total_results);
  })
  .then(hideLoader);

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
//Для поиска по слову
const paginationSearch = new Pagination(container, options);

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
  showLoader();
  getSearch(keyWord, API_KEY, refs.currentPage)
    .then(data => {
      console.log(data.results);
      if (data.results.length === 0) {
        refs.alertBox.classList.remove('visually-hidden');
        refs.searchForm.reset();
        refs.cardCollection.innerHTML = '';
        pagination.reset(0);
        refs.paginationBox.classList.add('visually-hidden');
      } else {
        refs.paginationBox.classList.remove('visually-hidden');
        refs.alertBox.classList.add('visually-hidden');
        listMovies(data.results);
        paginationSearch.reset(data.total_results);
          paginationSearch.on('beforeMove', e => {
            refs.currentPage = e.page;
            getSearch(keyWord, API_KEY, refs.currentPage)
            .then(data => {
            listMovies(data.results);
        })
        .then(topFunction)
        .then(hideLoader);
        refs.searchForm.reset();
    });
      }
    })
    .then(hideLoader);
}

scrollToTop();