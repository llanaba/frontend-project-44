import play from '../index.js';
import { isPrime, getRandomNumber } from '../utils.js';

const prepareRoundData = (numberScope) => ({
  randomNumber: getRandomNumber(numberScope),
});

const generateAnswer = (gameData) => {
  const correctAnswer = isPrime(gameData.randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumber}`;
  const correctAnswer = generateAnswer(gameData);
  return {
    question,
    correctAnswer,
  };
};

const playBrainPrime = () => {
  const game = {
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    numberScope: 100,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainPrime;
