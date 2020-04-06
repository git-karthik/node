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
    let evens = [...inputStr].filter(val => val%2 == 0);
    if(evens.length < 2){      
        process.exit(0);
    }
    let secondLgEven = [...new Set(evens)].sort((a,b) => b-a)[1];
    process.stdout.write(""+secondLgEven);
}