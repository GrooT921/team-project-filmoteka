import { registration, autentification } from './utils/authentefication';

const refs = {
  openModalBtn: document.querySelector('[data-auth-modal-open]'),
  closeModalBtn: document.querySelector('[data-auth-modal-close]'),
  modal: document.querySelector('[data-auth-modal]'),
  registerForm: document.querySelector('.register-modal'),
  registerBtn: document.querySelector('.register-btn'),
  authModal: document.querySelector('.authorization-modal'),
  authForm: document.getElementById('auth-form'),
  regForm: document.getElementById('reg-form'),
  backToLoginBtn: document.querySelector('.login-btn'),
  modalForm: document.querySelector('.authorization-form'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.registerBtn.addEventListener('click', onRegisterBtn);
refs.backToLoginBtn.addEventListener('click', onBackToLoginBtn);
refs.authForm.addEventListener('submit', autentification);
refs.regForm.addEventListener('submit', registration);

document.addEventListener("keydown", e => {
  if (e.code === "Escape") {
    refs.modal.classList.add('hidden');
  }
});

export function openModal(e) {
  
  refs.modal.classList.remove('hidden');

  // document.body.style.position = 'fixed';
  // document.body.style.top = `-${window.scrollY}px`;
}

export function closeModal(e) {
  refs.modal.classList.add('hidden');
//   const scrollY = document.body.style.top;
// document.body.style.position = '';
// document.body.style.top = '';
// window.scrollTo(0, parseInt(scrollY || '0') * -1);

}

function onRegisterBtn() {
  refs.registerForm.classList.remove('hidden');
  refs.authModal.classList.add('hidden');
}

function onBackToLoginBtn() {
  refs.registerForm.classList.add('hidden');
  refs.authModal.classList.remove('hidden');
}
