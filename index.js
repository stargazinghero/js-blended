//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?")
// let message = '';

// console.log(question);
// if (question === 'ECMAScript') {
    
//     message = "Верно!";
    
// } else {
//     message = "Не знаете? ECMAScript!";
// }

// console.log(message);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const globalMinutes = 122;
// const hours = Math.floor(globalMinutes / 60);
// const modifyHours = String(hours).padStart(2,0);
// const minutes = globalMinutes % 60;
// const modifyMinutes = String(minutes).padStart(2,0);


// // console.log(parseInt(hours));
// console.log(`${modifyHours}:${modifyMinutes}`);
 
//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max
const max = 50;
const min = 23;
let total = 0;

for (let i = max; i >= min; i--) {
    if (i % 2 === 0) {
        continue
    }
    total += i; 
}
console.log(total);