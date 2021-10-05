'use strict';

let number = 56;
console.log(number);

const leftBorderWidth = 1;
console.log(leftBorderWidth);

// ----------------

number = 23;
console.log(number);

// константа неизменна, поэтому 
//  leftBorderWidth = 2; -  не будет рабоать !

// ------------------
// прямых констант не бывает, пример ниже
const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

// устаревший вариант задания переменной

var Var = 10;
console.log(Var);
// тоже самое, что и let, так же можно изменять!
// разница между let - var , var существует до того, как объявлена в коде, пример ниже

console.log(lol);
var lol = "misha"; //результат undefined - то есть какое то значение!


// еще 1 премер с лет и вар, лет не будет видно, вар будет, так как существует до объявления
{
    let rez = 50;
    var rez2 = 50;
}
console.log(rez2);
// console.log(rez);

// современный стиль кода
// use strict
// он необходим, что бы убрать из кода некие не точности, к примеру без стогого режима можно было бы объявлить переменную a = 15 вызвать ее и она бы сработала, со строгим режимом так не получить, если использовать современныйй стиль!

// -------- Задание -----------



let people,
    admin;

people = "Джон";
admin = people;
alert(admin);

let planetEarth,
    visitor;
