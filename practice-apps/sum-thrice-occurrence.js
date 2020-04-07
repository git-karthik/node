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
    let occuredThrice = false;
    [...new Set(inputNums)].forEach((value, index) => {
        let occurs = inputNums.filter(n => n==value).length;
        if(occurs == 3){
            sum += value;
        }
    });

    process.stdout.write(""+sum);
}