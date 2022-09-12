import axios from 'axios';
import API_KEY from './apiKey';
import getMovieDetails from './fetches/getMovieDetails';
import { actionWatch, actionQueue } from './utils/modalBtnAction';
import { Film } from './film/film';

import '../sass/components/_modal-form.scss';

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    form: document.querySelector('.form'),
    card: document.querySelector('.list'),
    body: document.querySelector('body'),
  };



  function getCurrentGenres(genreList) {
    return genreList
      .map(singleGenre => {
        return singleGenre.name;
      })
      .join(', ');
  }


  const openModal = () => {
    document
      .getElementById('modal_form')
      .closest('.modal_overlay')
      .classList.add('active');
  };

  const closeModal = (e = false) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    document
      .getElementById('modal_form')
      .closest('.modal_overlay')
      .classList.remove('active');
  };

  const modalForm = e => {
    if (!e.target.closest('.card__film .thumb')) {
      return false;
    }
    const currentCardId = e.target.closest('.thumb').dataset.id;
    getMovieDetails(API_KEY, currentCardId).then(data => {
      const {
        genres,
        title,
        vote_average,
        vote_count,
        poster_path,
        popularity,
        original_title,
        overview,
      } = data;
      const img =
    'https://raw.githubusercontent.com/GrooT921/team-project-filmoteka/main/src/images/no-images-found.png';
      const form_html = `
        <form class="form">
        <div class="form__film-card">
        <div class="form__film-img">
            <img class="form-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"
            onerror='this.src="${img}"'/>
        </div>
        </div>
        <div class="form__info">
        <h2 class="form__title">${title}</h2>
        <ul class="form__info-list">
            <li class="form__info-item">
                <p class="form__info-name">Vote / Votes</p>
                <p class="form__info-details"> <span class="film__rating">${vote_average.toFixed(1)}</span> / ${vote_count}</p>
            </li>
            <li class="form__info-item">
                <p class="form__info-name">Popularity</p>
                <p class="form__info-details">${popularity}</p>
            </li>
            <li class="form__info-item">
                <p class="form__info-name">Original Title</p>
                <p class="form__info-details details-title">${original_title}</p>
            </li>
            <li class="form__info-item">
                <p class="form__info-name">Genre</p>
                <p class="form__info-details">${getCurrentGenres(genres)}</p>
            </li>
        </ul>
        <div class="form__about">
        <h3 class="form__about-name">About</h3>
        <p class="form__about-details">${overview}</p>
        </div>
        <div class="form__btn-list">
            <button data-action=${
              Film.isFilmExistInWatched(data.id)[0]
            } id="watched" class="form-button form-add-btn" type="button">${
        Film.isFilmExistInWatched(data.id)[1]
      }</button>
            <button data-action=${
              Film.isFilmExistInQueue(data.id)[0]
            } id="queue" class="form-button form-queue-btn" type="button">${
        Film.isFilmExistInQueue(data.id)[1]
      }</button>
        </div>
        </div>
        </form>
        `;

      const modalFormElement = document.getElementById('modal_form');

      modalFormElement.innerHTML = form_html;
      document.getElementById('watched').addEventListener('click', event => {
        actionWatch(event, data);
      });
      document.getElementById('queue').addEventListener('click', event => {
        actionQueue(event, data);
      });
      openModal();
      disableScroll ();
      
    });
  };
  

  document.addEventListener('click', modalForm);

  // document.getElementById('btn-close').addEventListener('click', closeModal);

  document.getElementById('btn-close').addEventListener('click', () => {
    closeModal();
    scroll ()
  });

  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal_overlay')) {
      closeModal();
      scroll ()
    }
  })

  document.getElementById('btn-close').addEventListener('click', () => {
    closeModal();
    // document.querySelector('.library__btn').classList.contains('active__btn')
    //   ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
    //   : Film.renderWatchedFilms('queueFilms', '');
  });
  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal_overlay')) {
      closeModal();
      // document.querySelector('.library__btn').classList.contains('active__btn')
      //   ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
      //   : Film.renderWatchedFilms('queueFilms', 'запланированных');

    }
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal();
      scroll ()

      // document.querySelector('.library__btn').classList.contains('active__btn')
      //   ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
      //   : Film.renderWatchedFilms('queueFilms', 'запланированных');

    }
  });
  
  let currentPosition = '';
  function disableScroll (){
    currentPosition = window.scrollY;
  // refs.body.classList.add('disable-scroll')
  document.body.style.position = 'fixed';
  document.body.style.top = `-${currentPosition}px`
// document.body.style.width = '100%';
  }

  function scroll (){
    // refs.body.classList.add('disable-scroll')
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo({
      top: currentPosition,
      behavior: 'instant',
    })
    }
});

