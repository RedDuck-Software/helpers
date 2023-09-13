import { formatUnits } from 'viem/utils';

export const formatBigInt = (value: bigint, decimals = 18, precision = 2) =>
  parseFloat(formatUnits(value, decimals)).toFixed(precision);
