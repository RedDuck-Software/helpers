import { formatComa } from '@redduck/helpers-js';
import { formatBigInt } from './formatBigInt';

export const formatBigIntComa = (value: bigint, decimals = 18, precision = 2) =>
  formatComa(formatBigInt(value, decimals, precision), precision);
