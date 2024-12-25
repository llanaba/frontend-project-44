import getUserAnswer from './userInteraction.js';
import { isEqual } from './utils.js';

const numberOfRounds = 3;

const play = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(game.rules);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const roundData = game.prepareRoundData(game.numberScope);
    const round = game.generateRound(roundData);
    console.log(round.question);
    const userAnswer = getUserAnswer('Your answer: ');
    if (!isEqual(round.correctAnswer, userAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}.'`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
