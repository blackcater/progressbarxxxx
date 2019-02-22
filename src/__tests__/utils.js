import { calculateBetweenDays } from '../utils';

describe('#calculateBetweenDays', () => {
  it('should be right when same year and same month', () => {
    expect(
      calculateBetweenDays(new Date(2019, 1, 1), new Date(2019, 1, 1))
    ).toBe(0);

    expect(
      calculateBetweenDays(new Date(2019, 1, 1), new Date(2019, 1, 20))
    ).toBe(19);

    expect(() =>
      calculateBetweenDays(new Date(2019, 1, 20), new Date(2019, 1, 1))
    ).toThrow('fromDate cannot be later than toDate');
  });

  it('should be correct when same year', () => {
    expect(
      calculateBetweenDays(new Date(2019, 0, 1), new Date(2019, 1, 1))
    ).toBe(31);

    expect(
      calculateBetweenDays(new Date(2019, 1, 1), new Date(2019, 2, 1))
    ).toBe(28);

    expect(
      calculateBetweenDays(new Date(2016, 1, 1), new Date(2016, 2, 1))
    ).toBe(29);

    expect(
      calculateBetweenDays(new Date(2019, 0, 1), new Date(2019, 11, 31))
    ).toBe(364);

    expect(() =>
      calculateBetweenDays(new Date(2019, 1, 1), new Date(2019, 0, 1))
    ).toThrow('fromDate cannot be later than toDate');
  });

  it('should be correct when different year', () => {
    expect(
      calculateBetweenDays(new Date(2015, 5, 1), new Date(2016, 5, 1))
    ).toBe(366);

    expect(
      calculateBetweenDays(new Date(2016, 0, 1), new Date(2017, 0, 1))
    ).toBe(366);

    expect(
      calculateBetweenDays(new Date(2017, 5, 1), new Date(2018, 5, 1))
    ).toBe(365);

    expect(
      calculateBetweenDays(new Date(2018, 0, 1), new Date(2019, 0, 1))
    ).toBe(365);

    expect(
      calculateBetweenDays(new Date(2017, 0, 1), new Date(2019, 0, 1))
    ).toBe(365 * 2);
  });
});
