const isEven = require("./utils/isEven");

test("is Even", () => {
  const result = isEven(2);

  expect(result).toBe(true);
});

test("is Odd", () => {
  const result = isEven(3);

  expect(result).toBe(false);
});
