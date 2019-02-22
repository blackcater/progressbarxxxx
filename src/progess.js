const { calculateYearDays, calculatePassedDays } = require('./utils');

class Progress {
  constructor(options) {
    const date = new Date();

    this.options = options;
    this.totalDays = calculateYearDays(date);
    this.passedDays = calculatePassedDays(date);
  }

  run() {}
}

module.exports = Progress;
