const fizzBuzz = number => {
  switch (true) {
    case number % 5 === 0 && number % 3 === 0:
      return 'FizzBuzz';
    case number % 5 === 0:
      return 'Buzz';
    case number % 3 === 0:
      return 'Fizz';
    default:
      return number;
  }
};

module.exports = fizzBuzz;
