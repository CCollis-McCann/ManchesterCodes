const humanCatDogYears = age => {
  let catYears, dogYears;

  switch (true) {
    case age === 1:
      catYears = dogYears = 15;
      break;
    case age === 2:
      catYears = dogYears = 24;
      break;
    case age > 2:
      catYears = 24 + (age - 2) * 4;
      dogYears = 24 + (age - 2) * 5;
  }

  return [age, catYears, dogYears];
};

module.exports = humanCatDogYears;
