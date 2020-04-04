const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();
var input_stdin_array = [];
// Test Data
// 5
// 23 23 45 56 76
rl.on("line", (data) => {
    input_stdin_array.push(data);
});

rl.on("close", () => {
    _processInputs();
});

function _processInputs() {
    let inputStr = input_stdin_array[1].split(' ');
    let groupedInputs = new Map();
    //Group Inputs
    for(let i=0; i<inputStr.length; i++){
        if(!groupedInputs.has(inputStr[i])){
            groupedInputs.set(inputStr[i], 1);
        } else{
            let count = groupedInputs.get(inputStr[i]);
            groupedInputs.set(inputStr[i], ++count);
        }
    }
    let maxvalue = Math.max(...groupedInputs.values());
    let modalKey = [...groupedInputs.entries()].filter(([k,v]) => v==maxvalue).map(([k, v]) => k);
    console.log(`Modal Number: ${modalKey.toString()}`);
}

