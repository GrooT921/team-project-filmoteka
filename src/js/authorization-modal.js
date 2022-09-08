const refs = {
openModalBtn: document.querySelector("[data-auth-modal-open]"),
closeModalBtn: document.querySelector("[data-auth-modal-close]"),
modal: document.querySelector("[data-auth-modal]"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);

export function  openModal(e) {
    refs.modal.classList.remove("hidden");
}

export function closeModal(e) {
    refs.modal.classList.add("hidden")
}