import readlineSync from 'readline-sync';

const getUserAnswer = (questionText) => readlineSync.question(questionText);

export default getUserAnswer;
