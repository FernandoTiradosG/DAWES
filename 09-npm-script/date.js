import { DateTime } from "luxon";
import chalk from "chalk";

const currentDate = DateTime.now().toJSDate();
const args = process.argv.slice(2);

if (args.length === 1){
    const mensaje = args[0];

    switch (mensaje) {
        case 'imprime:azul':
            console.log(chalk.blue(currentDate))
            break;
        case 'imprime:rojo':
            console.log(chalk.red(currentDate))
            break;
        case 'imprime:verde':
            console.log(chalk.green(currentDate))
            break;
        default:
            console.log(currentDate);
            break;
    }
}
