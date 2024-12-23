import { getUserAnswer } from './cli.js';
// import isCorrect from './is-correct.js';

// const getCorrectAnswer = (solveQuestion, ...args) => {
//   return solveQuestion(...args);
// };

const isUserAnswerCorrect = (correctAnswer, userAnswer) =>
  correctAnswer === userAnswer;

// const playRound = (roundData) => {
//   // const result = evaluateAnswer(roundData);
//   console.log(roundData);
// };

const play = (game) => {
  console.log(game.rules);
  for (let i = 1; i <= game.numberOfRounds; i += 1) {
    console.log(`ROUND ${i}`);
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
    // console.log(userAnswer);
    // const round = game.playRound(roundData);
    // console.log(roundResult);
  }
};

export default play;
