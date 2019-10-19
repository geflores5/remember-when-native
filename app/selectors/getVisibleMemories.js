import moment from 'moment';

const getVisibleMemories = (memories, {
  text, startDate, endDate,
}) =>
  memories.filter((memory) => {
    const date = moment(memory.date);
    // const startDateMatch = typeof startDate !== 'number' || memory.date >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || memory.date <= endDate;
    const startDateMatch = startDate ? startDate.isSameOrBefore(date, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(date, 'day') : true;
    const textMatch =
      memory.title.toLowerCase().includes(text.toLowerCase()) ||
      memory.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });

export default getVisibleMemories;
