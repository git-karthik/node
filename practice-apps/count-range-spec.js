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
    let inputNums = [...input_stdin_array[1].split(' ')].map(Number);
    let ranges = [...input_stdin_array[2].split(' ')].map(Number);
    
    let output = [...inputNums].filter(val => val <= ranges[1] && val >= ranges[0])
    .filter(n => n%3!=0 && n%5!=0).length;

    process.stdout.write(""+output);
}