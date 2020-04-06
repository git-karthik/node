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
    let inputStr = [...input_stdin_array[1].split(' ')].map(Number);    
    let twiceOccurences = inputStr.filter(n => inputStr.indexOf(n) != inputStr.lastIndexOf(n));
    let output = [...new Set(twiceOccurences)].reduce((a,b) =>{
        return a+b;
    },0);
    console.log(output);
}