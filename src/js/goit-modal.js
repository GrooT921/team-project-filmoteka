import { students } from './students-list';

const refs = {
openModalBtn: document.querySelector("[data-modal-open]"),
closeModalBtn: document.querySelector("[data-modal-close]"),
modal: document.querySelector("[data-modal]"),
students: document.querySelector(".students-students__list"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

export function  toggleModal(e) {
    refs.modal.classList.toggle("is-hidden");
    console.log('Working');
    markupStudents(students);
}

function markupStudents(students) { 
    refs.students.insertAdjacentHTML('beforeend', students.map(student => { 
        return `<li class="student">
                    <img class="student__image" src="${students.image}" alt="${student.name} фото" width="270" />
                    <div class="student__description">
                        <h3 lang="ru" class="student__name">${student.name}</h3>
                        <p lang="en" class="student__part">${student.part}</p>
                        <p lang="en" class="student__participation">${student.participation}</p>
                    </div>
                </li>`
                }).join(''));
}


