import play from '../index.js';
import { getRandomNumber, getNumberFromRange } from '../utils.js';

const maxProgressionLength = 10;
const minProgressionLength = 5;
const maxDifference = 5;
const minDifference = 2;

const generateGappedSequence = (length, step, startingNumber, gapIndex) => {
  const gappedSequence = [];
  let missingNumber;
  for (let i = 0; i < length; i += 1) {
    const currentNumber = startingNumber + i * step;
    if (i === gapIndex) {
      missingNumber = currentNumber;
      gappedSequence.push('..');
    } else {
      gappedSequence.push(currentNumber);
    }
  }
  return { gappedSequence, missingNumber };
};

const prepareRoundData = (numberScope) => {
  const progressonLength = getNumberFromRange(
    maxProgressionLength,
    minProgressionLength,
  );
  const startingNumber = getRandomNumber(numberScope);
  const step = getNumberFromRange(maxDifference, minDifference);
  const gapIndex = getRandomNumber(progressonLength - 1);
  const gappedSequence = generateGappedSequence(
    progressonLength,
    step,
    startingNumber,
    gapIndex,
  );
  return gappedSequence;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.gappedSequence.join(' ')}`;
  const correctAnswer = gameData.missingNumber.toString();
  return {
    question,
    correctAnswer,
  };
};

const playBrainProgression = () => {
  const game = {
    rules: 'What number is missing in the progression?',
    numberScope: 50,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainProgression;
