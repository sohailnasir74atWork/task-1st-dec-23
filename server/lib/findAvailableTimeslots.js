const moment = require('moment');

const START_WORKDAY = 9;
const END_WORKDAY = 17;

function findAvailableTimeslots(eventsArray) {
  const results = [];
  const today = moment().startOf('day');
  for (let d = 1; d <= 10; d++) {
    for (let h = START_WORKDAY; h < END_WORKDAY; h++) {
      const start = today.clone().add(d, 'days').add(h, 'hours');
      const end = start.clone().add(1, 'hour');

      if (isAvailableForEveryone(eventsArray, start, end)) results.push(start.toISOString());
    }
  }
  return results;
}

function isAvailableForEveryone(eventsArray, start, end) {
  for (const events of eventsArray) {
    if (!isAvailable(events, start, end)) return false;
  }
  return true;
}

function isAvailable(events, start, end) {
  for (const event of events) {
    const eventStart = moment(event.start);
    const eventEnd = moment(event.end);

    if (eventEnd > start && eventStart < end) return false;
  }
  return true;
}

module.exports = findAvailableTimeslots;
