import play from '../index.js';
import { performCalculation, getRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];

const prepareRoundData = (numberScope) => ({
  randomNumberOne: getRandomNumber(numberScope),
  randomNumberTwo: getRandomNumber(numberScope),
  randomOperator: operators[getRandomNumber(operators.length - 1)],
});

const generateAnswer = (gameData) => {
  const correctAnswer = performCalculation(
    gameData.randomNumberOne,
    gameData.randomNumberTwo,
    gameData.randomOperator,
  ).toString();
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumberOne} ${gameData.randomOperator} ${gameData.randomNumberTwo}`;
  const correctAnswer = generateAnswer(gameData);
  return {
    question,
    correctAnswer,
  };
};

const playBrainCalc = () => {
  const game = {
    rules: 'What is the result of the expression?',
    numberScope: 10,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainCalc;
