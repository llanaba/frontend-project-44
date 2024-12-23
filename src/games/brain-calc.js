import greetUser from '../userInteraction.js';
import getRandomNumber from '../random.js';
import play from '../index.js';

const operators = ['+', '-', '*'];
const userName = greetUser();

const performCalculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const rules = 'What is the result of the expression?';
const numberScope = 10;

const prepareBrainCalcRoundData = (numberScope) => {
  return {
    randomNumberOne: getRandomNumber(numberScope),
    randomNumberTwo: getRandomNumber(numberScope),
    randomOperator: operators[getRandomNumber(2)],
  };
};

const generateBrainCalcAnswer = (gameData) => {
  const correctAnswer = performCalculation(
    gameData.randomNumberOne,
    gameData.randomNumberTwo,
    gameData.randomOperator
  ).toString();
  return correctAnswer;
};

const generateBrainCalcQuestion = (gameData) => {
  const question = `Question: ${gameData.randomNumberOne} ${gameData.randomOperator} ${gameData.randomNumberTwo}`;
  const answer = generateBrainCalcAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainCalc = () => {
  const game = {
    user: userName,
    rules: rules,
    numberScope: numberScope,
    generateQuestion: generateBrainCalcQuestion,
    prepareRoundData: prepareBrainCalcRoundData,
  };

  play(game);
};

export default playBrainCalc;
