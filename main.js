function createMultiplicationTable(start, end) {
  const MIN = 1;
  const MAX = 1000;
  const isValid = checkInput(start, end, MIN, MAX);
  if (isValid) {
    return getAllLines(start, end);
  }
  return null;
}

function checkInput(start, end, MIN, MAX) {
  if (start < MIN || end > MAX || start > end) {
    return false;
  }
  return true;
}

function getAllLines(start, end) {
  let result = "";
  for (let index = start; index <= end; index++) {
    const separator = index === end ? "" : "\n";
    result = result + getLine(start, index) + separator;
  }
  return result;
}

function getLine(start, end) {
  let result = "";
  for (let index = start; index <= end; index++) {
    result = result + getExpression(index, end);
  }
  return result;
}

function getExpression(firstFactor, secondFactor) {
  const separator = firstFactor === secondFactor ? "" : "\t";
  return `${firstFactor}*${secondFactor}=${firstFactor *
    secondFactor}${separator}`;
}

module.exports = {
  createMultiplicationTable,
  checkInput,
  getExpression,
  getLine,
  getAllLines
};
