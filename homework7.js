Опис ДЗ: Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

Наприклад pow(2,3) функція поверне значення 8.


let x = 2;
let y = 3; 
function pow (x, y) {
    let result = 1;
    for (let i =0; i < y; i++){
        result *=x;
    }
    return result;
}
console.log(pow(x,y));