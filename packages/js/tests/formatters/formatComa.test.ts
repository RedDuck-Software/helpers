import { describe, it, expect } from 'vitest';

import { formatComa } from '../../src/formatters/formatComa';

describe('Format Coma', () => {
  const cases: {
    testName: string;
    value: string | number;
    precision?: number;
    expected: string;
  }[] = [
    {
      testName: 'number without precision correctly',
      value: 1_000_000,
      expected: '1,000,000.00',
    },
    {
      testName: 'number with precision 0 correctly',
      value: 1_000_000,
      precision: 0,
      expected: '1,000,000',
    },
    {
      testName: 'number with precision 3 correctly',
      value: 1_000_000,
      precision: 3,
      expected: '1,000,000.000',
    },
    {
      testName: 'string without precision correctly',
      value: '1000000',
      expected: '1,000,000.00',
    },
    {
      testName: 'string with precision 0 correctly',
      value: '1000000',
      precision: 0,
      expected: '1,000,000',
    },
    {
      testName: 'string with precision 3 correctly',
      value: '1000000',
      precision: 3,
      expected: '1,000,000.000',
    },
  ];

  cases.forEach(({ testName, value, precision, expected }) =>
    it(`should format ${testName}`, () =>
      expect(formatComa(value, precision)).to.be.equal(expected)),
  );
});
