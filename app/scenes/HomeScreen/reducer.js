import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';
export const {
  Types: homeScreenTypes,
  Creators: homeScreenActions
} = createActions({
  // Fetch genres informations
  requestFetchGenre: null,
  // genres information was successfully fetched
  successFetchGenre: ['genres'],
  // An error occurred
  failureFetchGenre: ['errorMessage'],
  requestFetchDiscoverList: ['genreId'],
  successFetchDiscoverList: ['data'],
  failureFetchDiscoverList: ['errorMessage'],
  addToMyList: ['myList'],
  removeFromMyList: ['newList']
});

export const initialState = fromJS({
  genres: [],
  genreIsLoading: false,
  genreErrorMessage: null,
  discoverList: [],
  myList: []
});

export const fetchGenre = state =>
  state.set('userIsLoading', true).set('userErrorMessage', null);

export const successFetchGenre = (state, { genres }) =>
  state
    .set('genres', genres)
    .set('genreIsLoading', false)
    .set('genreErrorMessage', null);

export const failureFetchGenre = (state, { errorMessage }) =>
  state
    .set('genres', [])
    .set('genreIsLoading', false)
    .set('genreErrorMessage', errorMessage);

export const fetchDiscoverList = state =>
  state.set('userIsLoading', true).set('userErrorMessage', null);

export const successFetchDiscoverList = (state, draft, { data }) => {
  const discoverList = JSON.parse(JSON.stringify(draft.get('discoverList')));
  const genreId = data?.genreId;
  const foundIndex = discoverList?.find(item => item?.genreId === genreId);
  if (!foundIndex) {
    discoverList.push(data);
  }
  return draft.set('discoverList', discoverList);
};

export const failureFetchDiscoverList = (state, { errorMessage }) =>
  state
    .set('discoverList', [])
    .set('genreIsLoading', false)
    .set('genreErrorMessage', errorMessage);

export const addToMyList = (state, { myList }) => state.set('myList', myList);

export const removeFromMyList = (state, { newList }) =>
  state.set('myList', newList);
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case homeScreenTypes.REQUEST_FETCH_GENRE:
        return fetchGenre(state, action);
      case homeScreenTypes.SUCCESS_FETCH_GENRE:
        return successFetchGenre(state, action);
      case homeScreenTypes.FAILURE_FETCH_GENRE:
        return failureFetchGenre(state, action);
      case homeScreenTypes.REQUEST_FETCH_DISCOVER_LIST:
        return fetchDiscoverList(state, action);
      case homeScreenTypes.SUCCESS_FETCH_DISCOVER_LIST:
        return successFetchDiscoverList(state, draft, action);
      case homeScreenTypes.FAILURE_FETCH_DISCOVER_LIST:
        return failureFetchDiscoverList(state, action);
      case homeScreenTypes.ADD_TO_MY_LIST:
        return addToMyList(state, action);
      case homeScreenTypes.REMOVE_FROM_MY_LIST:
        return removeFromMyList(state, action);
      default:
        return state;
    }
  });
