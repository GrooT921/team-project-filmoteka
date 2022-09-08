export const showLoader = () => {
  document.querySelector('body').classList.add('scroll-hidden');
  document.querySelector('.loader').classList.remove('is-hidden');
}

export const hideLoader = () => {
  document.querySelector('body').classList.remove('scroll-hidden');
  document.querySelector('.loader').classList.add('is-hidden');
}