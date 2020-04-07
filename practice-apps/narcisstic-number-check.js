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
    let inputNum = Number(input_stdin_array[0].trim());
    let _asStr = input_stdin_array[0].trim();
    let digits = _asStr.length;
    let sumUp = [..._asStr.split('')].map(Number).map((value) => Math.pow(value, digits)).reduce((a,b) => a+b,0);
    
    if(sumUp == inputNum){
        process.stdout.write("True");
    } else{
        process.stdout.write("False");
        
    }

}

