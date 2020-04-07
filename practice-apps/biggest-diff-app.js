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
    const arrlen = inputStr.length;
    if(arrlen < 2){
        process.exit(0);
    }
    //Sorted
    inputStr.sort((a,b) => a-b);

    let smallest = inputStr[0];
    let largest = inputStr[arrlen-1];
    process.stdout.write(""+(largest-smallest));
}