

let strForReverse = 'Pohahontas';

let reversed = reverseStr(strForReverse);
console.log(reversed)
function reverseStr(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        result += char;
        console.log(char)
    }

    return result;
}