import { registration, autentification } from './utils/authentefication';

const refs = {
  openModalBtn: document.querySelector('[data-auth-modal-open]'),
  closeModalBtn: document.querySelector('[data-auth-modal-close]'),
  modal: document.querySelector('[data-auth-modal]'),
  registerForm: document.querySelector('.register-modal'),
  registerBtn: document.querySelector('.register-btn'),
  authModal: document.querySelector('.authorization-modal'),
  backToLoginBtn: document.querySelector('.login-btn'),
  modalForm: document.querySelector('.authorization-form'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.registerBtn.addEventListener('click', onRegisterBtn);
refs.backToLoginBtn.addEventListener('click', onBackToLoginBtn);

export function openModal(e) {
  refs.modal.classList.remove('hidden');
  refs.modalForm.addEventListener('submit', autentification);
}

export function closeModal(e) {
  refs.modal.classList.add('hidden');
}

function onRegisterBtn() {
  refs.registerForm.classList.remove('hidden');
  refs.authModal.classList.add('hidden');
  refs.modalForm.removeEventListener('submit', autentification);
  refs.modalForm.addEventListener('submit', registration);
}

function onBackToLoginBtn() {
  refs.registerForm.classList.add('hidden');
  refs.authModal.classList.remove('hidden');
  refs.modalForm.removeEventListener('submit', registration);
  refs.modalForm.addEventListener('submit', autentification);
}
