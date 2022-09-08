import './sass/index.scss';
import './js/library-header';
import './js/pagination';
import API_KEY from './js/apiKey';
import getTrending from './js/getTrending';

getTrending(API_KEY, 'movie', 'day').then(data => {
    console.log(data);
    //TODO: Тут потрібно запускати функцію відображення карток, додам як тільки з'являться шаблони карток
});