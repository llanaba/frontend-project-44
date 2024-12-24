import play from '../index.js';
import { isPrime, getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberScope = 100;

const prepareRoundData = (numberScope) => {
  return {
    randomNumber: getRandomNumber(numberScope),
  };
};

const generateAnswer = (gameData) => {
  const correctAnswer = isPrime(gameData.randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumber}`;
  const answer = generateAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainPrime = () => {
  const game = {
    rules,
    numberScope,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainPrime;
