"use strict";
function miniDigit (x) {
    if ((x | 0) != x || x <= 0) {
        return "ОШИБКА!!! Число x должно быть натуральным!!!"
    }     
    let minNum = 9;
    let newX = x;
    while (newX != 0) {
        let rem = newX % 10;
        if (rem < minNum) {
            minNum = rem;
        }
        let remm = newX % 10;
        newX = (newX - remm) / 10;
    }  
    return minNum;
}

let x = prompt("Введите число x");
alert (`Минимальная цифра числа ${x} = ${miniDigit(x)}`)