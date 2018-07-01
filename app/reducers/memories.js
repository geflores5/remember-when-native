const memoriesInitialState = [];

export default (state = memoriesInitialState, action) => {
  switch (action.type) {
    case 'ADD_MEMORY':
      return [...state, action.memory];
    case 'REMOVE_MEMORY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_MEMORY':
      return state.map((memory) => {
        if (memory.id === action.id) {
          return {
            ...memory,
            ...action.updates,
          };
        }
        return memory;
      });
    default:
      return state;
  }
};
