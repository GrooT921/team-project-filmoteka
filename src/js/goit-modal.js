import { students } from './students-list';

const refs = {
openModalBtn: document.querySelector(".footer__link[data-modal-open]"),
closeModalBtn: document.querySelector(".button-goit-close[data-modal-close]"),
modal: document.querySelector("[data-modal]"),
students: document.querySelector(".container-students__list"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

export default function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle("is-goit-hidden");
    console.log(refs.openModalBtn);
            // console.log(`${this.student.image}`);

    markupStudents(students);
    console.log('Working after');
    if (refs.modal.classList.contains("is-goit-hidden")) { 
        resetMarkup();
        console.log('Working  if hidden');
    }
}




function markupStudents(students) { 
    console.log(students[2].name);

    refs.students.insertAdjacentHTML('beforeend', students.map(student => { 
        return `<li class="student">
                    <img class="student__image" src="${student.image}" alt="${student.name} фото" width="70" />
                    <div class="student__description">
                        <h3 lang="uk" class="student__name">${student.name.toUpperCase()}</h3>
                        <p lang="en" class="student__role">${student.role}</p>
                    </div>
                </li>`
    }).join(''));

}
function resetMarkup() { 
    refs.students.innerHTML = '';
}