import { getUserAnswer } from '../cli.js';
import getRandomNumber from '../random.js';
import isCorrect from '../is-correct.js';
import getCorrectAnswer from '../index.js';

const operators = ['+', '-', '*'];

const performCalculation = (num1, num2, operator) => {
  console.log(num1);
  console.log(operator);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const playBrainCalc = (userName, rules, numberOfQuestions, maxNumber) => {
  console.log(rules);
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const randomNumberOne = getRandomNumber(maxNumber);
    const randomNumberTwo = getRandomNumber(maxNumber);
    const randomOperator = operators[getRandomNumber(3)];
    console.log(`RANDOM OPERATOR: ${randomOperator}`);
    const correctAnswer = getCorrectAnswer(
      performCalculation,
      randomNumberOne,
      randomNumberTwo,
      randomOperator
    ).toString();
    console.log(
      `Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo}`
    );
    // const correctAnswer = (randomNumberOne + randomNumberTwo).toString();
    const userAnswer = getUserAnswer('Your answer: ');
    if (isCorrect(correctAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainCalc;
