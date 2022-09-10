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
  };

  function getCurrentGenres(genreList) {
    return genreList
      .map(singleGenre => {
        return singleGenre.name;
      })
      .join(', ');
  }

  // refs.card.addEventListener('click', modalForm);

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
      const form_html = `
        <form class="form">
        <div class="form__film-card">
        <div class="form__film-img">
            <img class="form-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" >
        </div>
        </div>
        <div class="form__info">
        <h2 class="form__title">${title}</h2>
        <ul class="form__info-list">
            <li class="form__info-item">
                <p class="form__info-name">Vote / Votes</p>
                <p class="form__info-details"> <span class="film__rating">${vote_average}</span> / ${vote_count}</p>
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
            } id="watched" class="form-button form-active-btn" type="button">${
        Film.isFilmExistInWatched(data.id)[1]
      }</button>
            <button data-action=${
              Film.isFilmExistInQueue(data.id)[0]
            } id="queue" class="form-button" type="button">${
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
    });
  };

  document.addEventListener('click', modalForm);

  document.getElementById('btn-close').addEventListener('click', () => {
    closeModal();
    document.querySelector('.library__btn').classList.contains('active__btn')
      ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
      : Film.renderWatchedFilms('queueFilms', 'запланированных');
  });
  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal_overlay')) {
      closeModal();
      document.querySelector('.library__btn').classList.contains('active__btn')
        ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
        : Film.renderWatchedFilms('queueFilms', 'запланированных');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal();
      document.querySelector('.library__btn').classList.contains('active__btn')
        ? Film.renderWatchedFilms('watchedFilms', 'просмотренных')
        : Film.renderWatchedFilms('queueFilms', 'запланированных');
    }
  });
});

// if(false){

// function modalForm (e) {
//   if(e.target.nodeName !==  "IMG") {
//     return
//   }
//   const currentCard = e.target.parentNode;
//   const currentCardId = currentCard.dataset.id;
//   getMovieDetails(API_KEY, currentCardId)
//   .then(({
//   genres,
//   title,
//   vote_average,
//   vote_count,
//   poster_path,
//   popularity,
//   original_title,
//   overview,
// }) => {

//     const form_html = `
//     <form class="form">
//         <div class="form__film-card">
//             <div class="form__film-img">
//                 <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" width=375px height=478px>
//             </div>
//         </div>
//         <div class="form__info">
//             <h2 class="form__title">${title}</h2>
//             <ul>
//                 <li class="form__info-item">
//                     <p class="form__info-name">Vote / Votes</p>
//                     <p class="form__info-details">${vote_average} / ${vote_count}</p>
//                 </li>
//                 <li class="form__info-item">
//                     <p class="form__info-name">Popularity</p>
//                     <p class="form__info-details">${popularity}</p>
//                 </li>
//                 <li class="form__info-item">
//                     <p class="form__info-name">Original Title</p>
//                     <p class="form__info-details">${original_title}</p>
//                 </li>
//                 <li class="form__info-item">
//                     <p class="form__info-name">Genre</p>
//                     <p class="form__info-details">${getCurrentGenres (genres)}</p>
//                 </li>
//             </ul>
//             <h3 class="form__about-name">About</h3>
//             <p class="form__about-name">${overview}</p>
//             <div class="form__btn-list">
//                 <button class="form-button" type="submit">Add to watched</button>
//                 <button class="form-button" type="submit">Add to queue</button>
//             </div>
//         </div>
//     </form>
//     `;

//     const modalFormElement = document.getElementById('modal_form');

//     modalFormElement.innerHTML = form_html;

//     modalFormElement.closest('.modal_overlay').classList.toggle('active');

// console.log(getCurrentGenres (genres));
// console.log(genres[0].name)
//     const instance = basicLightbox.create(`
//    <div class="modal">

// </div>
// `, {
//     onShow: (instance) => {
//       function onInstanceclick(e) {
//         if (e.code === 'Escape') {
//           instance.close();
//         }
//       }
//       document.addEventListener('keydown', onInstanceclick);
//       instance.element().querySelector('.btn-close').onclick = instance.close;
//     },
//     onClose: instance => {
//       function onInstanceclick(e) {
//         if (e.code === 'Escape') {
//           instance.close();
//         }
//       }
//       document.removeEventListener('keydown', onInstanceclick);
//     },

// })
// instance.show()
//   })
//   }

//   function getCurrentGenres(genreList) {
//    return  genreList.map ((singleGenre) => {
// return singleGenre.name
//     }
//     ).join( ", ")

// });

// function modalForm () {
//   getMovieDetails(API_KEY)
//       .then(data => {
//         const {
//           genres,
//           title,
//           vote_average,
//           vote_count,
//           poster_path,
//           // backdrop_path,
//           popularity,
//           original_title,
//           overview,
//         } = data;

//         const instance = basicLightbox.create(`
//         <div class="modal">
//         <button type="button" class="btn-close">
//         <svg width="30" height="30"></svg>
//         </button>
//         <form class="form">
//         <div class="form__film-card">
//         <div class="form__film-img">
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" width=375px height=478px>
//         </div>
//         <div class="form__info">
//         <h3 class="form__title">Name of film <b>${title}</b></h3>
//             <p class="form__info-item"><span>Popularity <b>${popularity}</b></span></p>
//             <p class="form__info-item"><span>Original Title <b>${original_title}</b></span></p>
//             <p class="form__info-item"><span>Genre</span> <b>${genres}</b></p>
//             <p class="form__info-item"><span>Vote / Votes <b>${vote_average}</b> / <b>${vote_count}</b></span></p>
//             <p class="form__info-about"><span>About <b>${overview}</b></span></p>
//             <div class="form__btn-list">
//                 <button class="form-button" type="submit">Add to watched</button>
//                 <button class="form-button" type="submit">Add to queue</button>
//             </div>
//         </div>
//         </div>
//         </form>
//     </div>
//     `, {
//         onShow: (instance) => {
//           function onInstanceclick(e) {
//             if (e.code === 'Escape') {
//               instance.close();
//             }
//           }
//           document.addEventListener('keydown', onInstanceclick);
//           instance.element().querySelector('.btn-close').onclick = instance.close;
//         },
//         onClose: instance => {
//           function onInstanceclick(e) {
//             if (e.code === 'Escape') {
//               instance.close();
//             }
//           }
//           document.removeEventListener('keydown', onInstanceclick);
//         },

//     })
//     instance.show()
//       })
//       .catch(error => {
//       });
//     }

// document.onclick = function(event) {
//   if(event.target === refs.modal) {
//     refs.modal.classList.add("is-hidden");
//   }
// }

//     const instance = basicLightbox.create(`
//     <div class="modal">
//     <img src=""  width=375 height=478/>
//     <div class="form__info">
//         <h3 class="form__title">Name of film <b></b></h3>
//         <p class="form__info-item"><span>Popularity <b>}</b></span></p>
//         <p class="form__info-item"><span>Original Title <b></b></span></p>
//         <p class="form__info-item"><span>Genre</span> <b></b></p>
//         <p class="form__info-item"><span>Vote / Votes <b></b> / <b></b></span></p>
//         <p class="form__info-about"><span>About <b></b></span></p>
//         <div class="form__btn-list">
//             <button class="form-button" type="submit">Add to watched</button>
//             <button class="form-button" type="submit">Add to queue</button>
//         </div>
//     </div>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()

// return `
// <div class="form__film-card">
//           <img src=""  width=375 height=478/>
//           <div class="form__info">
//               <h3 class="form__title">Name of film <b></b></h3>
//               <p class="form__info-item"><span>Popularity <b>}</b></span></p>
//               <p class="form__info-item"><span>Original Title <b></b></span></p>
//               <p class="form__info-item"><span>Genre</span> <b></b></p>
//               <p class="form__info-item"><span>Vote / Votes <b></b> / <b></b></span></p>
//               <p class="form__info-about"><span>About <b></b></span></p>
//               <div class="form__btn-list">
//                   <button class="form-button" type="submit">Add to watched</button>
//                   <button class="form-button" type="submit">Add to queue</button>
//               </div>
//           </div>
//       </div>
// `

// function buildModal (movies) {
//   const markup = movies.map(({backdrop_path, title, original_title, vote_average, vote_count, popularity, overview,
//     genres
// }) => {
//       return `
//       <div class="form__film-card">
//                 <img src="${backdrop_path}"  width=375 height=478/>
//                 <div class="form__info">
//                     <h3 class="form__title">Name of film <b>${title}</b></h3>
//                     <p class="form__info-item"><span>Popularity <b>${popularity}</b></span></p>
//                     <p class="form__info-item"><span>Original Title <b>${original_title}</b></span></p>
//                     <p class="form__info-item"><span>Genre</span> <b>${genres}</b></p>
//                     <p class="form__info-item"><span>Vote / Votes <b>${vote_average}</b> / <b>${vote_count}</b></span></p>
//                     <p class="form__info-about"><span>About <b>${overview}</b></span></p>
//                     <div class="form__btn-list">
//                         <button class="form-button" type="submit">Add to watched</button>
//                         <button class="form-button" type="submit">Add to queue</button>
//                     </div>
//                 </div>
//             </div>
//       `
//     })
//     .join('');
//     refs.film.insertAdjacentHTML('beforeend', markup);
// }

// function buildModal (movie) {
//   refs.film.innerHTML = movie.map(({backdrop_path, title, original_title, vote_average, vote_count, popularity, overview
//         }) => {
//               return `
//               <div class="form__film-card">
//                         <img src="${backdrop_path}"  width=375 height=478/>
//                         <div class="form__info">
//                             <h3 class="form__title">Name of film <b>${title}</b></h3>
//                             <p class="form__info-item"><span>Popularity <b>${popularity}</b></span></p>
//                             <p class="form__info-item"><span>Original Title <b>${original_title}</b></span></p>

//                             <p class="form__info-item"><span>Vote / Votes <b>${vote_average}</b> / <b>${vote_count}</b></span></p>
//                             <p class="form__info-about"><span>About <b>${overview}</b></span></p>
//                             <div class="form__btn-list">
//                                 <button class="form-button" type="submit">Add to watched</button>
//                                 <button class="form-button" type="submit">Add to queue</button>
//                             </div>
//                         </div>
//                     </div>
//               `
//             })
//       .join('');
// };

//   // refs.openModal.addEventListener("click", openModal);
// refs.closeModal.addEventListener("click", closeModal);
// // function openModal() {
// //   refs.modal.classList.remove("is-hidden");
// // }
// function closeModal() {
//   refs.modal.classList.add("is-hidden");
// }
// document.onclick = function(event) {
//   if(event.target === refs.modal) {
//     refs.modal.classList.add("is-hidden");
//   }
// }
// document.addEventListener("keydown", function() {
//   refs.modal.classList.add('is-hidden');
// });

// WORK
// refs.openModal.addEventListener("click", openModal);
// refs.closeModal.addEventListener("click", closeModal);
// function openModal() {
//   refs.modal.classList.remove("is-hidden");
// }
// function closeModal() {
//   refs.modal.classList.add("is-hidden");
// }
// document.onclick = function(event) {
//   if(event.target === refs.modal) {
//     refs.modal.classList.add("is-hidden");
//   }
// }
// document.addEventListener("keydown", function() {
//   refs.modal.classList.add('is-hidden');
// });

// function modalForm () {
//   getMovieDetails(API_KEY)
//       .then(data => {
//         refs.modal.classList.remove("is-hidden");
//         const markup = data.map(({backdrop_path, title, original_title, vote_average, vote_count, popularity, overview,
//           genres
//       }) => {
//             return `
//             <div class="form__film-card">
//                       <img src="${backdrop_path}"  width=375 height=478/>
//                       <div class="form__info">
//                           <h3 class="form__title">Name of film <b>${title}</b></h3>
//                           <p class="form__info-item"><span>Popularity <b>${popularity}</b></span></p>
//                           <p class="form__info-item"><span>Original Title <b>${original_title}</b></span></p>
//                           <p class="form__info-item"><span>Genre</span> <b>${genres}</b></p>
//                           <p class="form__info-item"><span>Vote / Votes <b>${vote_average}</b> / <b>${vote_count}</b></span></p>
//                           <p class="form__info-about"><span>About <b>${overview}</b></span></p>
//                           <div class="form__btn-list">
//                               <button class="form-button" type="submit">Add to watched</button>
//                               <button class="form-button" type="submit">Add to queue</button>
//                           </div>
//                       </div>
//                   </div>
//             `
//           })
//           .join('');
//           refs.form.insertAdjacentHTML('beforeend', markup);
//       // console.log(data)
//       })
//       .catch(error => {
//       });
//     }

// Work
// function modalForm () {
//   getMovieDetails(API_KEY)
//       .then(data => {
//         const instance = basicLightbox.create(`
//         <div class="modal">
//         <button type="button" class="btn-close">
//         <svg width="30" height="30"></svg>
//         </button>
//         <img src=""  width=375 height=478/>
//         <div class="form__info">
//             <h3 class="form__title">Name of film <b></b></h3>
//             <p class="form__info-item"><span>Popularity <b>}</b></span></p>
//             <p class="form__info-item"><span>Original Title <b></b></span></p>
//             <p class="form__info-item"><span>Genre</span> <b></b></p>
//             <p class="form__info-item"><span>Vote / Votes <b></b> / <b></b></span></p>
//             <p class="form__info-about"><span>About <b></b></span></p>
//             <div class="form__btn-list">
//                 <button class="form-button" type="submit">Add to watched</button>
//                 <button class="form-button" type="submit">Add to queue</button>
//             </div>
//     `, {
//         onShow: (instance) => {
//           function onInstanceclick(e) {
//             if (e.code === 'Escape') {
//               instance.close();
//             }
//           }
//           document.addEventListener('keydown', onInstanceclick);
//           instance.element().querySelector('.btn-close').onclick = instance.close;
//         },
//         onClose: instance => {
//           function onInstanceclick(e) {
//             if (e.code === 'Escape') {
//               instance.close();
//             }
//           }
//           document.removeEventListener('keydown', onInstanceclick);
//         },

//     })
//     instance.show()
//       })
//       .catch(error => {
//       });
//     }

// }
