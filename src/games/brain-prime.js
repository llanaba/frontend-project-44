import play from '../index.js';
import { findGcd, getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberScope = 100;

const prepareRoundData = (numberScope) => {
  return {
    randomNumberOne: getRandomNumber(numberScope),
    randomNumberTwo: getRandomNumber(numberScope),
  };
};

const generateAnswer = (gameData) => {
  const correctAnswer = findGcd(
    gameData.randomNumberOne,
    gameData.randomNumberTwo
  ).toString();
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumberOne} ${gameData.randomNumberTwo}`;
  const answer = generateAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainGcd = () => {
  const game = {
    rules,
    numberScope,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainGcd;
