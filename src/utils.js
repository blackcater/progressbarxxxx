function isLeapYear(year) {
  const divide = x => year % x === 0;

  return (divide(4) && !divide(100)) || divide(400);
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

function calculateMonthBetweenDays(
  year,
  [fromMonth, toMonth],
  [fromDay, toDay]
) {
  const isLeap = isLeapYear(year);
  let sum = 0;

  if (fromMonth === toMonth) return toDay - fromDay;

  for (let i = fromMonth; i <= toMonth; i++) {
    if (i === fromMonth) {
      sum += getMonthDays(i, isLeap) - fromDay;

      continue;
    }

    if (i === toMonth) {
      sum += toDay;

      continue;
    }

    sum += getMonthDays(i, isLeap);
  }

  return sum;
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

  // same year
  if (fY === tY) {
    return calculateMonthBetweenDays(fY, [fM, tM], [fD, tD]);
  }

  // normal case
  for (let i = fY; i <= tY; i++) {
    // eslint-disable-next-line
    if (i === fY) {
      sum += calculateMonthBetweenDays(i, [fM, 11], [fD, 31]);

      continue;
    }

    if (i === tY) {
      sum += calculateMonthBetweenDays(i, [0, tM], [0, tD]);

      continue;
    }

    sum += calculateMonthBetweenDays(i, [0, 11], [0, 31]);
  }

  return sum;
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

module.exports = {
  calculateYearDays,
  calculatePassedDays,
  calculateBetweenDays,
};
