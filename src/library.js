import { libBtnsHandler } from './js/utils/lib_btn-swith';

const libRefs = {
  libBtnsContainer: document.querySelector('.library-btn-list'),
};

// Для этой всех функций, которые будут выолняться на страничке myLib нужно поставить какой-то if
libRefs.libBtnsContainer.addEventListener('click', libBtnsHandler);
