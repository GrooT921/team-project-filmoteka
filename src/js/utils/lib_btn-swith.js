const lib_refs = {
  watchedBtn: document.querySelector('button[data-library="watched"]'),
  queueBtn: document.querySelector('button[data-library="queue"]'),
  libBtnsContainer: document.querySelector('.library-btn-list'),
  libFilmsContainer: document.getElementById('answer'),
};

export function libBtnsHandler(event) {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.dataset.library === 'watched'
  ) {
    lib_refs.watchedBtn.classList.add('active-btn');
    lib_refs.queueBtn.classList.remove('active-btn');
    renderWatchedFilms('watched', 'просмотренных');
  } else if (
    event.target.nodeName === 'BUTTON' &&
    event.target.dataset.library === 'queue'
  ) {
    lib_refs.watchedBtn.classList.remove('active-btn');
    lib_refs.queueBtn.classList.add('active-btn');
    renderWatchedFilms('queue', 'запланированных');
  }
}

function renderWatchedFilms(filmGroup, rewWords) {
  const films = getFilmsFromLocalStorage(filmGroup);
  const list = films.length
    ? films.map(createOneFilmCard()).join('')
    : `<p style="text-align: center; color: white;">У вас ещё нету ${rewWords} фильмов :(</p>`;
  lib_refs.libFilmsContainer.innerHTML = list;
}

function getFilmsFromLocalStorage(filmGroup) {
  return JSON.parse(localStorage.getItem(`${filmGroup}-films`) || '[]');
}
