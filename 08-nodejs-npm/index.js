import { faker } from '@faker-js/faker';
import chalk from 'chalk';

const randomName = faker.internet.userName();

const randomColor = chalk.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));

console.log(randomColor(randomName));
