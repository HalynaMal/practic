//=== Практика 02.12.2023 (масиви, обєкти) ===

// Дано масив чисел. Виведіть на екран всі парні елементи масиву.
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log('=======================================');

// * Напиши скрипт, який, для об'єкта user, послідовно:
// * додає поле mood зі значенням 'happy'
// * замінює значення hobby на 'skydiving'
// * замінює значення premium на false
// * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
//  */

const user = {
  name: 'John',
  age: 21,
  hobby: 'css',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}
console.log('========================================');
//=================================================================================

 /* У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для
підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. 
Якщо об'єкт salaries порожній, результат має бути 0.
 */

const salaries = {
      Mango: 100,
      Poly: 160,
      Ajax: 130,
}
const arrSal = Object.values(salaries)
sum = 0;
for (const sal of arrSal) {
    sum += sal;
}
console.log(sum);
console.log('========================================');
//=======================================================
//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.

// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(1)); // false
// console.log(isPlainObject(undefined)); // false

function isPlainObject(params) {
    return typeof params === 'object' && params !== null && !Array.isArray(params)}
console.log('========================================');

//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//mult() перемножує збережені значення та повертає результат

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
     },
    sum() {
        return this.a + this.b;
     },
    mult() {
        return this.a * this.b;
    }
}
calculator.read(5, 6);
console.log(calculator.sum());
console.log(calculator.mult())
console.log('========================================');
//======================================================================
//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат updateObject({a: 1. b: 2}, 'b') => {a: 1}
function updateObject(obj, ...params) {
    for (const key of params) {
        delete obj[key]
    }
    return obj;
}
console.log(updateObject({ a: 1, b: 2 }, 'b'))
console.log('========================================');

// видалення дублікатів в масиві
//const result = removeDuplicates(arr);
//console.log(result); //[php, css, script, html, java]

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log('========================================');