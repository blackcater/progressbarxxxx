function isLeapYear(year) {
  const divide = x => year % x === 0;

  return (divide(4) && !divide(100)) || divide(400);
}

function calculateYearDays(date) {
  const year = date.getFullYear();
  const fromDate = new Date(year, 0, 1);
  const toDate = new Date(year + 1, 0, 1);

  return calculateBetweenDays(fromDate, toDate);
}

function calculatePassedDays(date) {
  const year = date.getFullYear();
  const fromDate = new Date(year, 0, 1);

  return calculateBetweenDays(fromDate, date);
}

function getMonthDays(month, isLeap) {
  const months = [
    31, // Jan.
    isLeap ? 29 : 28, // Feb.
    31, // Mar.
    30, // Apr.
    31, // May
    30, // June
    31, // July
    31, // Aug.
    30, // Sept.
    31, // Oct.
    30, // Nov.
    31, // Dec
  ];

  return months[month];
}

function calculateBetweenDays(fromDate, toDate) {
  const [fY, fM, fD] = [
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate(),
  ];
  const [tY, tM, tD] = [
    toDate.getFullYear(),
    toDate.getMonth(),
    toDate.getDate(),
  ];

  if (
    fY > tY ||
    (fY === tY && fM > tM) ||
    (fY === tY && fM === tM && fD > tD)
  ) {
    throw new Error('fromDate cannot be later than toDate');
  }

  let sum = 0;

  // same year and same month
  if (fY === tY && fM === tM) {
    return tD - fD;
  }

  // same year
  if (fY === tY) {
    const isLeap = isLeapYear(fY);

    for (let i = fM; i <= tM; i++) {
      if (i === fM) {
        sum += getMonthDays(i, isLeap) - fD;

        continue;
      }

      if (i === tM) {
        sum += tD;

        continue;
      }

      sum += getMonthDays(i, isLeap);
    }

    return sum;
  }

  // normal case
  for (let i = fY; i <= tY; i++) {
    // eslint-disable-next-line
    const isLeap = isLeapYear(i);
  }
}

module.exports = {
  isLeapYear,
  calculateYearDays,
  calculatePassedDays,
  calculateBetweenDays,
};
