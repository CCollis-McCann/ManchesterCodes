exports.getNthElement = (index, array) => array[index % array.length];

exports.arrayToCSVString = array => array.toString();

exports.csvStringToArray = string => string.split(',');

exports.addToArray = (element, array) => {
  array.push(element);
};

exports.addToArray2 = (element, array) => array.concat(element);

exports.removeNthElement = (index, array) => array.splice(index, 1);

exports.numbersToStrings = numbers => numbers.map(String);

exports.uppercaseWordsInArray = strings =>
  strings.map(word => word.toUpperCase());

exports.reverseWordsInArray = strings =>
  strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );

exports.onlyEven = numbers => numbers.filter(expected => expected % 2 === 0);

exports.removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

exports.elementsStartingWithAVowel = strings =>
  strings.filter(word => /^[aeiou]/i.test(word));

exports.removeSpaces = string => string.replace(/\s/g, '');

exports.sumNumbers = numbers => numbers.reduce((acc, curVal) => acc + curVal);

exports.sortByLastLetter = strings =>
  strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
