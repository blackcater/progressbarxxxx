const chalk = require('chalk');
const update = require('log-update');
const { calculateYearDays, calculatePassedDays } = require('./utils');

class Progress {
  constructor(options) {
    const date = new Date();

    this.options = options;
    this.totalDays = calculateYearDays(date);
    this.passedDays = calculatePassedDays(date);
  }

  run() {
    const { width, animate } = this.options;
    const count = Math.floor(width * (this.passedDays / this.totalDays));
    let times = 0;

    if (!animate) {
      this._printResult(count, width);
      this._printTail();

      return;
    }

    const interval = setInterval(() => {
      times++;

      if (times > width) {
        this._printTail();

        return clearInterval(interval);
      }

      update();

      this._printResult(count, times);
    }, 10);
  }

  _printResult(count, times) {
    const { width, color } = this.options;
    const aCount = Math.floor((count / width) * times);
    const iaCount = times - aCount;
    let str = '';

    new Array(aCount).fill('').forEach(() => {
      str += chalk`{${color}  }`;
    });

    new Array(iaCount).fill('').forEach(() => {
      str += chalk`{white ░}`;
    });

    process.stdout.write(str);
  }

  _printTail() {
    const { type } = this.options;

    console.log(
      type === 'day'
        ? chalk`  {bold ${this.totalDays - this.passedDays} days left}`
        : chalk`  {bold ${((this.passedDays / this.totalDays) * 100).toFixed(
            2
          )}%}`
    );
    console.log('');
  }
}

module.exports = Progress;
