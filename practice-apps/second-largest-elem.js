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
    let inputNums = [...input_stdin_array].map(Number);   
    const arrlen = inputNums.length;   
    inputNums.sort((a,b) => a-b);    

    if(arrlen > 2){
        process.stdout.write(""+inputNums[arrlen-2]);
    } else{
        process.exit(0);
    }
}