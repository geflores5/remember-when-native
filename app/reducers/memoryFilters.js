const memoryFiltersInitialState = {
  text: '',
  sortBy: 'ascending',
  startDate: null,
  endDate: null,
};

export default (state = memoryFiltersInitialState, action) => {
  switch (action.type) {
    case 'SET_MEMORY_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_ASCENDING':
      return {
        ...state,
        sortBy: 'ascending',
      };
    case 'SORT_BY_DESCENDING':
      return {
        ...state,
        sortBy: 'descending',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
