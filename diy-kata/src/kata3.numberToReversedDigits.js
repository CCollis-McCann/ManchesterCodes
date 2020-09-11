const numberToReversedDigits = number =>
  number
    .toString()
    .split('')
    .reverse()
    .map(Number);

module.exports = numberToReversedDigits;
