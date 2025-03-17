import chalk from "chalk";

function colorfulMessage() {
    console.log(chalk.blue("This is a blue message"));
    console.log(chalk.green.italic("This is an italic green message"));
}

export default colorfulMessage;