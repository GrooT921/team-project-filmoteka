const lib_refs = {
  watchedBtn: document.querySelector('button[data-library="watched"]'),
  queueBtn: document.querySelector('button[data-library="queue"]'),
  libBtnsContainer: document.querySelector('.library__btn-list'),
  libFilmsContainer: document.querySelector('.continer_card'),
};

export function libBtnsHandler(event) {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.dataset.library === 'watched'
  ) {
    lib_refs.watchedBtn.classList.add('active__btn');
    lib_refs.queueBtn.classList.remove('active__btn');
    renderWatchedFilms('watched', 'просмотренных');
  } else if (
    event.target.nodeName === 'BUTTON' &&
    event.target.dataset.library === 'queue'
  ) {
    lib_refs.watchedBtn.classList.remove('active__btn');
    lib_refs.queueBtn.classList.add('active__btn');
    renderWatchedFilms('queue', 'запланированных');
  }
}

export function renderWatchedFilms(filmGroup, rewWords) {
  const films = getFilmsFromLocalStorage(filmGroup);
  const list = films.length
    ? films.map(createOneFilmCard()).join('')
    : `<p style="text-align: center;">У вас ещё нету ${rewWords} фильмов :(</p>`;
  lib_refs.libFilmsContainer.innerHTML = list;
}

function getFilmsFromLocalStorage(filmGroup) {
  return JSON.parse(localStorage.getItem(`${filmGroup}-films`) || '[]');
}
