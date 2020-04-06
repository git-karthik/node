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

    for(let i=0; i<inputNums.length; i++){
        let currentNum = inputNums[i];
        let searchIndex = i+1;
        let isLeader = true;
        while(searchIndex < inputNums.length){
            if(currentNum < inputNums[searchIndex]){
                isLeader = false;
                break;
            }
            searchIndex++;
        }
        if(isLeader){
            if(i < inputNums.length - 1){
                process.stdout.write(""+inputNums[i]+"\n");
            }else{
                process.stdout.write(""+inputNums[i]);
            }            
        }
    }
}