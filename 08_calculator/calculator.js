const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
	let added = 0;
  for (const num of array) {
    added += num;
  }
  return added;
};

const multiply = function(array) {
  let multiplied = 1;
  for (const num of array) {
    multiplied *= num;
  }
  return multiplied;
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(number) {
	if (number === 0) return 1;
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product = product * i
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
