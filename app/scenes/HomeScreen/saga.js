import { put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { getGenres, getDiscoverList } from 'app/services/MovieServices';
import { homeScreenActions, homeScreenTypes } from './reducer';

export function* fetchGenre() {
  const response = yield call(getGenres);
  if (response.ok) {
    const { data } = response;
    yield put(homeScreenActions.successFetchGenre(get(data, 'genres')));
  } else {
    yield put(
      homeScreenActions.failureFetchGenre(
        'There was an error while fetching genre informations.'
      )
    );
  }
}

export function* fetchDiscoverList(action) {
  const response = yield call(getDiscoverList, action?.genreId);
  if (response.ok) {
    const { data } = response;
    yield put(homeScreenActions.successFetchDiscoverList(get(data, 'results')));
  } else {
    yield put(
      homeScreenActions.failureFetchDiscoverList(
        'There was an error while fetching discovery List.'
      )
    );
  }
}
export default function* homeScreenSaga() {
  yield takeLatest(homeScreenTypes.REQUEST_FETCH_GENRE, fetchGenre);
  yield takeLatest(
    homeScreenTypes.REQUEST_FETCH_DISCOVER_LIST,
    fetchDiscoverList
  );
}
