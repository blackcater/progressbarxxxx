exports.isLunarYear = function(year) {
  const divide = x => year % x === 0;

  return (divide(4) && !divide(100)) || divide(400);
};

exports.calculateYearDays = function(date, isLunar) {};

exports.calculatePassedDays = function(date, isLunar) {};

exports.calculateBetweenDays = function(fromDate, toDate) {};
