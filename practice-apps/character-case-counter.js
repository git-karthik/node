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
const isUpperCase = (string) => /^[A-Z]*$/.test(string);
const isLowerCase = (string) => /^[a-z]*$/.test(string);
function _processInputs() {
    let inputStr = String(input_stdin_array[0]).trim().split('');
    let _ucCnt=0, _lcCnt=0;
    inputStr.filter(val => val !== ' ').forEach(value => {
        if(isUpperCase(value)){
            _ucCnt++;
        } else if(isLowerCase(value)){
            _lcCnt++
        }
    })
    process.stdout.write(""+_ucCnt+"\n");
    process.stdout.write(""+_lcCnt);
}