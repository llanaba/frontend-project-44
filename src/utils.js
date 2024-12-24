const getRandomNumber = (max) => Math.ceil(Math.random() * max);

const getNumberFromRange = (max, min) => {
  return Math.ceil(Math.random() * (max - min + 1) + min - 1);
};

const isEven = (number) => number % 2 === 0;

const performCalculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      console.log(`Оператор '${operator}' не поддерживается`);
      return;
  }
};

const isEqual = (value1, value2) => value1 === value2;

const findGcd = (num1, num2) => {
  const smaller = Math.min(num1, num2);
  for (let i = smaller; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

export {
  getRandomNumber,
  getNumberFromRange,
  isEven,
  performCalculation,
  isEqual,
  findGcd,
  isPrime,
};
