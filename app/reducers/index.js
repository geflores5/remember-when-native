import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import memories from './memories';
import memoryFilters from './memoryFilters';
import timelines from './timelines';
import timelineFilters from './timelineFilters';

export default combineReducers({
  memories,
  memoryFilters,
  timelines,
  timelineFilters,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
