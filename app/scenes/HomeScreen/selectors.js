import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectHomeDomain = state => (state.home || initialState).toJS();

export const selectGenre = () =>
  createSelector(selectHomeDomain, substate => get(substate, 'genres', null));

export const selectGenreIsLoading = () =>
  createSelector(selectHomeDomain, substate =>
    get(substate, 'genreIsLoading', null)
  );

export const selectGenreErrorMessage = () =>
  createSelector(selectHomeDomain, substate =>
    get(substate, 'genreErrorMessage', null)
  );

export const selectMovieList = () =>
  createSelector(selectHomeDomain, substate =>
    get(substate, 'discoverList', null)
  );

export const selectMyList = () =>
  createSelector(selectHomeDomain, substate => get(substate, 'myList', null));
