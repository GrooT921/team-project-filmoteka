const refs = {
  searchSection: document.querySelector('.search'),
  libButtons: document.querySelector('.library-btn-list'),
  headerEl: document.querySelector('header'),
  libLink: document.querySelector('#library'),
  homeLink: document.querySelector('#home'),
};

refs.libLink.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  refs.searchSection.classList.add('visually-hidden');
  refs.libButtons.classList.remove('visually-hidden');
  refs.homeLink.classList.remove('current');
  refs.libLink.classList.add('current');
  refs.headerEl.classList.add('header-container_lib');
}
