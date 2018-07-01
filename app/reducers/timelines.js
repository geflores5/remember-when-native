const timelinesInitialState = [];

export default (state = timelinesInitialState, action) => {
  switch (action.type) {
    case 'ADD_TIMELINE':
      return [...state, action.timeline];
    case 'REMOVE_TIMELINE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TIMELINE':
      return state.map((timeline) => {
        if (timeline.id === action.id) {
          return {
            ...timeline,
            ...action.updates,
          };
        }
        return timeline;
      });
    default:
      return state;
  }
};
