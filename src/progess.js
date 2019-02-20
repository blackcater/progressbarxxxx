const { calculateYearDays, calculatePassedDays } = require('./utils');

class Progress {
  constructor(options) {
    const date = new Date();

    this.options = options;
    this.totalDays = calculateYearDays(date, options.lunar);
    this.passedDays = calculatePassedDays(date, options.lunar);
  }

  run() {}
}

module.exports = Progress;
