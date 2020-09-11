const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed true or No when passed false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
