const shuffle = require("../src/shuffle");
const botData = require("../src/botsData")

describe("shuffle should...", () => {
  // CODE HERE
  test('shuffle should return object', () => {
      const list = shuffle(botData)

      expect(Array.isArray(list)).toBe(true)
  })
   
  test('the name should be a string"', () => {
    const list = shuffle(botData);
    expect(typeof list[0].name).toBe("string");
})
})
