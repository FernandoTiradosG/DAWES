import { faker } from '@faker-js/faker';
import chalk from 'chalk';

const randomName = faker.string;

const randomColor = chalk.keyword(faker.internet.color());

console.log(randomColor(randomName));