import uuid from 'uuid';

export const addMemory = ({
  timelineID = '',
  title = '',
  date = 0,
  description = '',
  location = '',
  media = null,
} = {}) => ({
  type: 'ADD_MEMORY',
  memory: {
    id: uuid(),
    timelineID,
    title,
    date,
    description,
    location,
    media,
  },
});

export const removeMemory = ({ id } = {}) => ({
  type: 'REMOVE_MEMORY',
  id,
});

export const editMemory = (id, updates) => ({
  type: 'EDIT_MEMORY',
  id,
  updates,
});
