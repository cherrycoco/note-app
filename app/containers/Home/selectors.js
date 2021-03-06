/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

// select currentIdea from home
const makeSelectCurrentIdea = () => createSelector(
  selectHome,
  (homeState) => homeState.get('currentIdea')
);

// select currentIdea from home
const makeSelectSubject = () => createSelector(
  selectHome,
  (homeState) => homeState.get('subject')
);

// select currentIdea from home
const makeSelectText= () => createSelector(
  selectHome,
  (homeState) => homeState.get('text')
);

// select loading from home
const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

// select error from home
const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

// select success from home
const makeSelectSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('success')
);

export {
  selectHome,
  makeSelectCurrentIdea,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
  makeSelectSubject,
  makeSelectText,
};
