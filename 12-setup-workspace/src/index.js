import chalk from 'chalk';

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error;...........................................';

function myFunction(used) {
  if (used) {
    console.log(chalk.green(used));
    return used;
  }
  return '';
}

myFunction(youShouldNeverUseVar);

const nonExistingVar = 'ExisteinVarLikeCons';
module.exports = nonExistingVar;
