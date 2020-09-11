exports.negate = a => !a;

exports.both = (a, b) => a && b;

exports.either = (a, b) => a || b;

exports.none = (a, b) => (!a && !b ? true : false);

exports.one = (a, b) => a !== b;

exports.truthiness = a => (a ? true : false);

exports.isEqual = (a, b) => a === b;

exports.isGreaterThan = (a, b) => a > b;

exports.isLessThanOrEqualTo = (a, b) => a <= b;

exports.isOdd = a => a % 2 !== 0;

exports.isEven = a => a % 2 === 0;

exports.isSquare = a => Math.sqrt(a) % 1 === 0;

exports.startsWith = (char, string) => string.charAt(0) === char;

exports.containsVowels = string => !!string.match(/[aeiou]/gi);

exports.isLowerCase = string => string === string.toLowerCase();
