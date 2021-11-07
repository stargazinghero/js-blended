//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// console.log(styles.shift());
// styles.splice(0, 0, "Рэп", "Регги");
// // styles.unshift("Рэп", "Регги")

// console.log(styles);

//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//        return "Вы ввели не число";
//   }
//     return a < b ? a : b;
// }

// console.log(min('a', 5));

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
// const styles = ["Джаз", "Блюз", "Рок-н-ролл", "Регги", "Рэп"];
const styles = [
  { name: "Джаз", engl: "jazz", number: 1 },
  { name: "Блюз", engl: "blues", number: 2 },
  { name: "Рок-н-ролл", engl: "rock 'n' roll ", number: 3 },
  { name: "Регги", engl: "reggae", number: 4 },
  { name: "Рэп", engl: "rap", number: 5 },
];

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${element.number} - ${element.name}`);
  }
}
logItems(styles);
