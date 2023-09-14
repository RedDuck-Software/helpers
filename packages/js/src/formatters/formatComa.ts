export const formatComa = (value: string | number, precision = 2) => {
  const numberString =
    typeof value === 'string'
      ? parseFloat(value).toFixed(precision)
      : value.toFixed(precision);
  const parts = [];
  let decimalPart = '';

  const [integerPart, fractionalPart] = numberString.split('.');

  let i = integerPart.length - 1;

  while (i >= 0) {
    const part = integerPart.substring(i - 2, i + 1);
    parts.unshift(part);
    i -= 3;
  }

  const formattedIntegerPart = parts.join(',');

  if (fractionalPart) {
    decimalPart = `.${fractionalPart}`;
  }

  return formattedIntegerPart + decimalPart;
};
