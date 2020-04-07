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
    
    let max_value = Number.MIN_VALUE;
    let min_value = Number.MAX_VALUE;
    if(inputStr.length < 2){
        process.exit(0);
    }
    for(let i=0; i< inputStr.length; i++){
        if((inputStr[i]-1) > max_value){
            max_value = inputStr[i]-i;
        }

        if((inputStr[i]-1) < min_value){
            min_value = inputStr[i]-i;
        }
    }

    process.stdout.write(""+(max_value-min_value));
}