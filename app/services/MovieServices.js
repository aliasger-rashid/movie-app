import { generateApiClient } from 'app/utils/apiUtils';

const configApi = generateApiClient('configApi');
export const getGenres = () =>
  configApi.get(
    'genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US'
  );

export const getDiscoverList = genreId =>
  configApi.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genreId}`
  );
