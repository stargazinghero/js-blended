// Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

const makeSheff = function (name) {
    return function makeDish(dish) {
        console.log(`${name} is cooking ${dish}`);
    };
};

const mango = makeSheff("mango");
console.dir(mango);
mango('coffe');

const bill = makeSheff("bill");
bill('pancake');
