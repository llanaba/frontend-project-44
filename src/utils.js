const getRandomNumber = (max) => Math.ceil(Math.random() * max);

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

export { getRandomNumber, isEven, performCalculation, isEqual };
