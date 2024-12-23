#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playBrainCalc from '../src/games/brain-calc.js';

const brainCalcRules = 'What is the result of the expression?';
const maxNumber = 10;
const numberOfQuestions = 3;

const userName = greetUser();
playBrainCalc(userName, brainCalcRules, numberOfQuestions, maxNumber);
