#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playBrainCalc from '../src/games/brain-calc.js';

const userName = greetUser();
playBrainCalc(userName);
