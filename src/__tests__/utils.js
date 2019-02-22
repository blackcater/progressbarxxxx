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
});
