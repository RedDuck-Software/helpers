import { describe, it, expect } from 'vitest';
import { formatBigIntComa } from '../../src/formatters/formatBigIntComa';
import { parseUnits } from 'viem';

describe('Format Coma', () => {
  const decimals = 18;
  const value = parseUnits('1000000', decimals);
  const cases: {
    testName: string;
    value: bigint;
    precision?: number;
    expected: string;
  }[] = [
    {
      testName: 'bigint without precision correctly',
      value,
      expected: '1,000,000.00',
    },
    {
      testName: 'bigint with precision 0 correctly',
      value,
      precision: 0,
      expected: '1,000,000',
    },
    {
      testName: 'bigint with precision 3 correctly',
      value,
      precision: 3,
      expected: '1,000,000.000',
    },
  ];

  cases.forEach(({ testName, value, precision, expected }) =>
    it(`should format ${testName}`, () =>
      expect(formatBigIntComa(value, decimals, precision)).to.be.equal(
        expected,
      )),
  );
});
