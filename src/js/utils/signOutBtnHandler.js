export default function exitBtnHandler() {
  sessionStorage.clear();
  //   localStorage.removeItem('films');
  //   Film.renderFilmList();

  document.querySelector('.modal-open-btn').classList.remove('hidden');
  document.getElementById('user-name-contain').innerHTML = '';
}
