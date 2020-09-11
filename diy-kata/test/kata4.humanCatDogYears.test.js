const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns an array of three numbers (human, cat dog) when passed a number representing human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(30)).toEqual([30, 136, 164]);
  });
});
