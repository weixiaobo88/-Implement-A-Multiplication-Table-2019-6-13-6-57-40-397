const {
  createMultiplicationTable,
  checkInput,
  getExpression,
  getLine,
  getAllLines
} = require("../main");

it("should createMultiplicationTable start 2 to 1", () => {
  // given
  const start = 2;
  const end = 1;

  // when
  const actualResult = createMultiplicationTable(2, 1);

  // then
  expect(actualResult).toBeNull();
});

it("should checkInput start 2 to 1", () => {
  // given
  const start = 2;
  const end = 1;

  // when
  const actualResult = checkInput(2, 1, 1, 1000);

  // then
  expect(actualResult).toBe(false);
});

it("should checkInput start 1 to 2", () => {
  // given
  const start = 1;
  const end = 2;

  // when
  const actualResult = checkInput(1, 2, 1, 1000);

  // then
  expect(actualResult).toBe(true);
});

it("should checkInput start 1 to 1000", () => {
  // given
  const start = 1;
  const end = 1000;

  // when
  const actualResult = checkInput(1, 1000, 1, 1000);

  // then
  expect(actualResult).toBe(true);
});

it("should getExpression return expression without '\t' if two numbers are same", () => {
  // given
  const start = 2;
  const end = 2;

  // when
  const actualResult = getExpression(2, 2);

  // then
  expect(actualResult).toEqual("2*2=4");
});

it("should getExpression return expression with '\t' if two numbers are different", () => {
  // given
  const start = 2;
  const end = 3;

  // when
  const actualResult = getExpression(2, 3);

  // then
  expect(actualResult).toEqual("2*3=6\t");
});

it("should getLine return line", () => {
  // given
  const start = 2;
  const end = 3;

  // when
  const actualResult = getLine(2, 3);

  // then
  expect(actualResult).toEqual("2*3=6\t3*3=9");
});

it("should getAllLines return allLines", () => {
  // given
  const start = 2;
  const end = 3;

  // when
  const actualResult = getAllLines(2, 3);

  console.log("2*2=4\n2*3=6\t3*3=9");

  // then
  expect(actualResult).toEqual("2*2=4\n2*3=6\t3*3=9");
});

it("should createMultiplicationTable start 2 to 2", () => {
  // given
  const start = 2;
  const end = 2;
  const expectedResult = "2*2=4";

  // when
  const actualResult = createMultiplicationTable(2, 2);

  // then
  expect(actualResult).toEqual(expectedResult);
});

it("should createMultiplicationTable start 2 to 3", () => {
  // given
  const start = 2;
  const end = 3;
  const expectedResult = "2*2=4\n2*3=6\t3*3=9";

  // when
  const actualResult = createMultiplicationTable(2, 3);

  // then
  expect(actualResult).toEqual(expectedResult);
});

it("should createMultiplicationTable start 2 to 4", () => {
  // given
  const start = 2;
  const end = 4;
  const expectedResult = "2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16";

  // when
  const actualResult = createMultiplicationTable(2, 4);

  // then
  expect(actualResult).toEqual(expectedResult);
});
