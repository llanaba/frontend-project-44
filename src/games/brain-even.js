import getRandomNumber from '../random.js';
import isEven from '../is-even.js';
import play from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberScope = 100;

const prepareBrainEvenRoundData = (numberScope) => {
  return {
    randomNumber: getRandomNumber(numberScope),
  };
};

const generateBrainEvenAnswer = (gameData) => {
  const correctAnswer = isEven(gameData.randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const generateBrainEvenQuestion = (gameData) => {
  const question = `Question: ${gameData.randomNumber}`;
  const answer = generateBrainEvenAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainEven = (userName) => {
  const game = {
    user: userName,
    rules: rules,
    // numberOfRounds: numberOfRounds,
    numberScope: numberScope,
    generateQuestion: generateBrainEvenQuestion,
    prepareRoundData: prepareBrainEvenRoundData,
  };

  play(game);
};

export default playBrainEven;
