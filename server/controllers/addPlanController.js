const Plan = require('../models/plan.js');
const addPlanController = {};
addPlanController.addPlan = async function (req, res, next) {
  try {
    const { plan } = req.body;
    // console.log('plan: ', plan);
    // console.log('INSIDE ADDPLAN CONTROLLER!');
    const createdPlan = await Plan.create({ plan: plan });
    res.locals.createdPlan = createdPlan;
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred in addPlanController middleware for addPlan' },
    });
  }
};

addPlanController.showPlan = async(req, res, next) => {
  const allPlans = await Plan.find({});
  try {
    res.locals.allPlans = allPlans;
    return next();
  } catch (err){
    return next({
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred in addPlanController middleware for showPlan' },
    });
  }

}

module.exports = addPlanController;
