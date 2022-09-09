function scrollToTop() {
  const scrollUp = document.getElementById('scroll-to-top');
  // When the user scrolls down from the top of the document, show the scrollUp
  // Коли користувач прокрутив вниз, з'являється кнопка повернутись вверх
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollUp.style.display = 'block';
    } else {
      scrollUp.style.display = 'none';
    }
  }

  // When the user clicks on the scrollUp, scroll to the top of the document
  // Коли користувач клікає на кнопку, сторінка скролиться вверх
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollUp.addEventListener('click', topFunction);
}
export default scrollToTop;
