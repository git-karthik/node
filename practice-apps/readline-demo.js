const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.prompt(true);
rl.question("What is your name?", (answer) => {
    process.stdout.write(`Welcome to NodeJs: ${answer}`);
    rl.close();
});

