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
    const arrLen = inputStr.length;
    let sum=0;
    if(arrLen > 2){  
        let sortedInput = inputStr.sort((a,b) => a-b);
        sum = sortedInput[arrLen-2]+sortedInput[1];          
    }

    process.stdout.write(""+sum);

}