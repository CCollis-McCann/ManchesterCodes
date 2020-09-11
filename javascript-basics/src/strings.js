exports.sayHello = string => `Hello, ${string}!`;

exports.uppercase = string => string.toUpperCase();

exports.lowercase = string => string.toLowerCase();

exports.countCharacters = string => string.length;

exports.firstCharacter = string => string.charAt(0);

exports.firstCharacters = (string, n) => string.slice(0, n);
