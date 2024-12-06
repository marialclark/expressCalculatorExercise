const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { parseNumbers, calculateMean, calculateMedian, calculateMode } = require('./helpers');

app.use(express.json());

// Route to calculate mean
app.get('/mean', function(req, res, next) {
  try {
    const nums = parseNumbers(req.query.nums);
    const mean = calculateMean(nums);
    res.json({
      response: {
        operation: "mean",
        value: mean
      }
    });
  } catch (err) {
    next(new ExpressError(err.message, 400));
  }
});

// Route to calculate median
app.get('/median', function(req, res, next) {
  try {
    const nums = parseNumbers(req.query.nums);
    const median = calculateMedian(nums);
    res.json({
      response: {
        operation: "median",
        value: median
      }
    });
  } catch (err) {
    next(new ExpressError(err.message, 400));
  }
});

// Route to calculate mode
app.get('/mode', function(req, res, next) {
  try {
    const nums = parseNumbers(req.query.nums);
    const mode = calculateMode(nums);
    res.json({
      response: {
        operation: "mode",
        value: mode
      }
    });
  } catch (err) {
    next(new ExpressError(err.message, 400));
  }
});


// Error handler
app.use(function(err, req, res, next) {
  const status = err.status || 400;
  return res.status(status).json({
    error: err.message
  });
});


app.listen(3000, function () {
  console.log('Server running on port 3000');
})