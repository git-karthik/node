const input_stdin = "2\r\n" + 
"abcdefgh\r\n" + 
"zxcvbnm"

const _processInputs = () => {
    input_stdin_array = input_stdin.split("\n");
    let _testCases = input_stdin_array[0];
    let cnt = 0; token = 0;
    while (cnt < _testCases) {
        let inputStr = input_stdin_array[++token].trim();
        let vowels = inputStr.split('').filter((value) => _isVowel(value)).length;
        let consonats = inputStr.length - vowels;
        process.stdout.write(vowels+" "+consonats+" "+vowels*consonats+"\n");
        cnt++;
    }
}

const _isVowel = (c) =>{
    const vowels = ['A','E','I','O','U'];
    return vowels.includes(c.toUpperCase());
}

_processInputs();