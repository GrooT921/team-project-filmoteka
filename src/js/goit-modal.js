import { students } from './students-list';

const refs = {
openModalBtn: document.querySelector(".footer__link[data-modal-open]"),
closeModalBtn: document.querySelector(".button-goit-close[data-modal-close]"),
modal: document.querySelector("[data-modal]"),
students: document.querySelector(".container-students__list"),
scrollToTopBtn: document.querySelector("#scroll-to-top"),
goitBackdrop: document.querySelector(".goit-backdrop"),
bodyForGoit: document.body,
goitModalWrapper: document.querySelector(".goit-wrapper"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.goitBackdrop.addEventListener("click", closeGoitModal);
refs.openModalBtn.addEventListener("click", toggleModal);

export  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle("is-goit-hidden");
    markupStudents(students);
    if (refs.modal.classList.contains("is-goit-hidden") || refs.modal.classList.contains("goit-modal-open")) {
        resetMarkup();
        refs.scrollToTopBtn.classList.remove("visually-hidden");
        refs.bodyForGoit.classList.remove("goit-modal-open");
    } else if (!refs.modal.classList.contains("is-goit-hidden")) { 
        refs.scrollToTopBtn.classList.add("visually-hidden");
        refs.bodyForGoit.classList.add("goit-modal-open");
    }
}

export function closeGoitModal(e) {
    if (refs.goitBackdrop === e.target) {
        resetMarkup();
        refs.modal.classList.add("is-goit-hidden");
        refs.bodyForGoit.classList.remove("goit-modal-open");
        refs.scrollToTopBtn.classList.remove("visually-hidden");
    }

}

function markupStudents(students) { 
    refs.students.insertAdjacentHTML('beforeend', students.map(student => { 
        return `<li class="student">
                    <div class="student__card">
                        <img class="student__image" src="${student.image}" alt="${student.name} фото" width="330" />
                        <div class="student__description">
                            <h3 lang="uk" class="student__name">${student.name.toUpperCase()}</h3>
                            <p lang="en" class="student__role">${student.role}</p>
                            <ul class="goit-social-links">
                                <li class="goit-social-link">
                                    <a href="#" class="goit-social-link__link">
                                    <svg class="goit-social-link__icon" width="32" height="32">
                                        <use href="./images/goit-students/icons.svg#icon-instagram"></use>
                                    </svg>
                                    </a>
                                </li>
                                <li class="goit-social-link">
                                    <a href="#" class="goit-social-link__link">
                                    <svg class="goit-social-link__icon" width="32" height="32">
                                        <use href="./images/goit-students/icons.svg#icon-close-black-2"></use>
                                    </svg>
                                    </a>
                                </li>
                                
                                <li class="goit-social-link">
                                    <a href="#" class="goit-social-link__link">
                                    <svg class="goit-social-link__icon" width="32" height="32">
                                        <use href="./images/goit-students/icons.svg#icon-linkedin"></use>
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>`
    }).join(''));

}
function resetMarkup() { 
    refs.students.innerHTML = '';
}

