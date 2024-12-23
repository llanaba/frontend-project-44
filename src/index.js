import { getUserAnswer } from './cli.js';

const isUserAnswerCorrect = (correctAnswer, userAnswer) =>
  correctAnswer === userAnswer;

const play = (game) => {
  console.log(game.rules);

  for (let i = 1; i <= game.numberOfRounds; i += 1) {
    const roundData = game.prepareRoundData(game.numberScope);
    const round = game.generateQuestion(roundData);
    console.log(round.question);
    const userAnswer = getUserAnswer('Your answer: ');
    if (isUserAnswerCorrect(round.correctAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}.'`
      );
      console.log(`Let's try again, ${game.user}!`);
      return;
    }
  }
};

export default play;
