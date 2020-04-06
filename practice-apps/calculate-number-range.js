const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();
var input_stdin_array = [];

rl.on("line", (data) => {
    input_stdin_array.push(data);
});

rl.on("close", () => {
    _processInputs();
});

function _processInputs() {
    let inputStr = input_stdin_array[1].split(' ');

    let maxValue = Math.max(...inputStr);
    let minValue = Math.min(...inputStr);

    console.log(maxValue-minValue);
}