// Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeSheff = function (name) {
//     return function makeDish(dish) {
//         console.log(`${name} is cooking ${dish}`);
//     };
// };

// const mango = makeSheff("mango");
// console.dir(mango);
// mango('coffe');

// const bill = makeSheff("bill");
// bill('pancake');


// Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product))

//Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

// const savePassword = (password) => {
//     return (ourPassword) => password === ourPassword;
// }

// const mangoPassword = savePassword('mango');
// console.log(mangoPassword('mango'));

//Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.

// const saveDiscount = (discoun) => {
//     return function makeDiscount(sum) {
//         return sum - sum * (discoun / 100)
//     }
// }

// const discoun = saveDiscount(70)
// console.log(discoun(1000));

// const saveDiscount = (discoun) => (sum) => sum - sum * (discoun / 100)

// const discoun = saveDiscount(70)
// console.log(discoun(1000));

//Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2
// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// const each = (array, callback) => {
//     return array.map(callback)
// };
// console.log(each(array,(value) => value * 2));