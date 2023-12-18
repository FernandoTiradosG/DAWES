import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import { format } from 'date-fns'

const randomName = faker.internet.userName();

const randomColor = chalk.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));

console.log(randomColor(randomName));

function printTime() {
    console.clear();
    const time = new Date();
    let second = time.getSeconds();

    const allTime = format(time, 'dd-MM-yyyy HH:mm:ss');
    if(second === 0){
        console.log(chalk.red(allTime));
    }else if (second % 10 === 0) {
        console.log(chalk.green(allTime))
    }else{
        console.log(allTime);
    }
}

setInterval(printTime, 1000);