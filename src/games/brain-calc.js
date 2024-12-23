import play from '../index.js';
import { performCalculation, getRandomNumber } from '../utils.js';

const rules = 'What is the result of the expression?';
const numberScope = 10;
const operators = ['+', '-', '*'];

const prepareRoundData = (numberScope) => {
  return {
    randomNumberOne: getRandomNumber(numberScope),
    randomNumberTwo: getRandomNumber(numberScope),
    randomOperator: operators[getRandomNumber(operators.length - 1)],
  };
};

const generateAnswer = (gameData) => {
  const correctAnswer = performCalculation(
    gameData.randomNumberOne,
    gameData.randomNumberTwo,
    gameData.randomOperator
  ).toString();
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumberOne} ${gameData.randomOperator} ${gameData.randomNumberTwo}`;
  const answer = generateAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainCalc = () => {
  const game = {
    rules,
    numberScope,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainCalc;
