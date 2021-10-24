//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

const question = prompt("Какое официальное название JavaScript?")
let message = '';

console.log(question);
if (question === 'ECMAScript') {
    
    message = "Верно!";
    
} else {
    message = "Не знаете? ECMAScript!";
}

console.log(message);