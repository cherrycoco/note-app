/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  currentIdea: {},
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_IDEA':
      return state
        .set('currentIdea', {
          id: action.id,
          subject: action.subject,
          text: action.text,
        })
        .set('loading', true)
        .set('error', false)
        .set('success', false);
    case 'ADD_IDEA_SUCCESS':
      return state
        .set('loading', false)
        .set('succcess', true);
    case 'ADD_IDEA_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('currentIdea', {});
    default:
      return state;
  }
}

export default homeReducer;
