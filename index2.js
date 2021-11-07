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
// const styles = [
//   { name: "Джаз", engl: "jazz", number: 1 },
//   { name: "Блюз", engl: "blues", number: 2 },
//   { name: "Рок-н-ролл", engl: "rock 'n' roll ", number: 3 },
//   { name: "Регги", engl: "reggae", number: 4 },
//   { name: "Рэп", engl: "rap", number: 5 },
// ];

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`${element.number} - ${element.name}`);
//   }
// }
// logItems(styles);
//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, -7];
// function findSmallerNumber(numbers) {
//   // return Math.min(...numbers)
//   let smallerNumber = numbers[0];
//   for (const number of numbers) {
//     if (smallerNumber > number) {
//       smallerNumber = number;
//           }

//   }
//   return smallerNumber;
// }
// console.log(findSmallerNumber(numbers));

/* Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const card = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    

    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return
      }
    }
    const newProduct = { ...product, quantity: 1 };
    this.items.push(newProduct)
  },

  remove(productName) {
for (let i = 0; i < this.items.length; i++) {
  const element = this.items[i];
  
  if (element.name === productName) {
    
    this.items.splice(i, 1);
  }
}
  },

  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const {price, quantity} of this.items) {
      total += price * quantity;
    }
    return total;
  },

  increaseQuantity(productName) {
    for (let item of this.items) {
      
      if (productName === item.name) {
        item.quantity += 1;
      }
    }
  },

  decreaseQuantity(productName) {
    for (let item of this.items) {
      
      if (productName === item.name) {
        item.quantity -= 1;
      }
    }
  }

}

card.add({ name: '🍎', price: 50 });
card.add({ name: '🍇', price: 70 });
card.add({ name: '🍇', price: 70 });
card.add({ name: '🍋', price: 60 });
card.add({ name: '🍓', price: 110 });
card.add({ name: '🍓', price: 110 });

card.remove('🍓');
card.increaseQuantity('🍋');
card.decreaseQuantity('🍇');
console.log(card.countTotalPrice());
console.table(card.getItems());