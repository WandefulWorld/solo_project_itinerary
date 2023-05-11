const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const addPlanController = require('./controllers/addPlanController.js');
//require model Plan
const Plan = require('./models/plan.js');

app.use(express.json());
app.use(cors());
//connect to database
const db =
  'mongodb+srv://wandaren:helloworld@cluster0.sghnzxn.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected...');
  });
//serve static files
app.use(express.static(path.join(__dirname, '../src')));
//routes below
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});



app.post('/addPlan', addPlanController.addPlan, async (req, res) => {
  return res.status(201).json(res.locals.createdPlan);
});

app.get('/addPlan', addPlanController.showPlan, async (req, res) => {
  return res.status(200).json(res.locals.allPlans);
});

app.delete('/deletePlan', async (req, res) => {
  await Plan.findByIdAndDelete(req.params.id);
  try {
    res.status(204).json({
      status: 'Success',
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err,
    });
  }
});

app.use('*', (req, res) => {
  res.status(404).send('Sorry there is nothing to see');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});

module.exports = app;
