const refs = {
  html: document.querySelector('html'),
  lightTheme: document.querySelector('#light'),
  darkTheme: document.querySelector('#dark'),
};
document.querySelector('#themetoggle').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      refs.html.classList.add('dark');
      refs.lightTheme.classList.remove('visually-hidden');
      refs.darkTheme.classList.add('visually-hidden');
    } else {
      refs.html.classList.remove('dark');
      refs.lightTheme.classList.add('visually-hidden');
      refs.darkTheme.classList.remove('visually-hidden');
    }
  } catch (err) {}
}

addDarkClassToHTML();
