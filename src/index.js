import './sass/index.scss';
import './js/library-header';
import API_KEY from './js/apiKey';
import getTrending from './js/getTrending';
import { libBtnsHandler } from './js/utils/lib_btn-swith';

const libRefs = {
  libBtnsContainer: document.querySelector('.library-btn-list'),
};

getTrending(API_KEY, 'movie', 'week').then(data => {
  console.log(data);
  //TODO: Тут потрібно запускати функцію відображення карток, додам як тільки з'являться шаблони карток
});

// Для этой всех функций, которые будут выолняться на страничке myLib нужно поставить какой-то if
libRefs.libBtnsContainer.addEventListener('click', libBtnsHandler);
