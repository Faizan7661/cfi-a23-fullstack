import express from "express"
const router = express.Router();


const cohortStartDate = new Date('2023-05-15');
const cohortEndDate = new Date('2023-09-15');


router.get('/progress', (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).send('Please provide a valid date.');
  }

  const inputDate = new Date(date);

  if (inputDate < cohortStartDate || inputDate > cohortEndDate) {
    return res.status(400).send('Enter a date within the cohort period (15 May to 15 September).');
  }

  const daysSinceStart = Math.floor((inputDate - cohortStartDate) / (1000 * 60 * 60 * 24));
  const totalDays = Math.floor((cohortEndDate - cohortStartDate) / (1000 * 60 * 60 * 24));
  const progress = (daysSinceStart / totalDays) * 100;

  res.send(`Your progress on ${inputDate.toDateString()} is ${progress.toFixed(2)}%.`);
});

export default router;

