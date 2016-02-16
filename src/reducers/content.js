
import { createAction, handleActions } from 'redux-actions';

import { fetchJSON } from '../network';

export const fetchHomeContent = createAction(
  'UPDATE_HOME_CONTENT',
  fetchJSON.bind(null, 'home')
);

export const fetchAboutContent = createAction(
  'UPDATE_ABOUT_CONTENT',
  fetchJSON.bind(null, 'about')
);

export default handleActions(
  {
    UPDATE_HOME_CONTENT: (state, action) => ({
      ...state,
      home: { ...state.home, ...action.payload }
    }),
    UPDATE_ABOUT_CONTENT: (state, action) => ({
      ...state,
      about: { ...state.about, ...action.payload }
    })
  },
  { home: {}, about: {} }
);
