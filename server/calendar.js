const db = require('db');
const express = require('express');

const findAvailableTimeslots = require('./lib/findAvailableTimeslots');

const router = express.Router();

router.get('/api/calendar', async (req, res) => {
  const { hostUserId, guestUserId } = req.query;
  const promises = [db.calendar.findEventsForUser(hostUserId)];
  if (guestUserId) {
    promises.push(db.calendar.findEventsForUser(guestUserId));
  }
  const events = await Promise.all(promises);

  res.json({
    name: 'Eng Test User',
    timeslotLengthMinutes: 60,
    timeslots: findAvailableTimeslots(events),
  });
});

module.exports = router;
