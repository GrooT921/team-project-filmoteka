import './sass/index.scss';
import API_KEY from './js/apiKey';
import getTrending from './js/fetches/getTrending';
import listMovies from './js/createListMovies';
import toggleModal from './js/goit-modal';

// Відображення популярних фільмів на головній сторінці
getTrending(API_KEY, 'movie', 'week').then(data => {
  listMovies(data.results);
});
