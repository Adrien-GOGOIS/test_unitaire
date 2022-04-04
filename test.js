const isEven = require("./utils/isEven");

test("is Even", () => {
  const result = isEven(2);

  expect(result).toBe(true);
});

test("is Odd", () => {
  const result = isEven(3);

  expect(result).toBe(false);
});

test("if is string, return false", () => {
  const result = isEven("string");

  expect(result).toBe(false);
});

test("if is string of even number", () => {
  const result = isEven("12");

  expect(result).toBe(true);
});

test("if is string of odd number", () => {
  const result = isEven("13");

  expect(result).toBe(false);
});
