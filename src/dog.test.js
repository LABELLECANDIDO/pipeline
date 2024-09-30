/* globals describe, test, expect */
const { bark } = require("./dog");

describe("dog test suuite", () => {

  test("dog barks", () => {
    const result = bark();
    expect(result).toBe("Au au");
  });
});
