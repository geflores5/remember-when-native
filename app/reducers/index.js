import { combineReducers } from 'redux';

import memories from './memories';
import memoryFilters from './memoryFilters';
import timelines from './timelines';
import timelineFilters from './timelineFilters';

export default combineReducers({
  memories,
  memoryFilters,
  timelines,
  timelineFilters,
});
