#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playBrainEven from '../src/brain-even.js';

const brainEvenRules =
  'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 100;
const numberOfQuestions = 3;

greetUser();
console.log(brainEvenRules);
playBrainEven(numberOfQuestions, maxNumber);
