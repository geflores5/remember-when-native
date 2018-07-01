import uuid from 'uuid';

export const addTimeline = ({ title = '', description = '' } = {}) => ({
  type: 'ADD_TIMELINE',
  timeline: {
    id: uuid(),
    title,
    description,
  },
});

export const removeTimeline = ({ id } = {}) => ({
  type: 'REMOVE_TIMELINE',
  id,
});

export const editTimeline = (id, updates) => ({
  type: 'EDIT_TIMELINE',
  id,
  updates,
});
