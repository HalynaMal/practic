//====== 27.01.2024 =======
// ==== 1 ==== //
 /**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello world'), 2000)
//   });
//    return promise;
// }
// greet().then(data=>console.log(data));
//======================

//======2 ======
/*
  Створіть функцію makeMessage, яка приймає два колбеки для випадку успішного виконання завдання (Ми це зробили - ${msg}) та для випадку помилки (Ми зіткнулися з помилкою - ${err}).
  Завдання повинно випадковим чином виконуватися з затримкою у 1 секунду.
  Якщо виконано успішно, передати в колбек '🟢 УСПІХ!', якщо ні - '🔴 ПОМИЛКА!'
  Переписати на проміс
  Незалежно від результату в кінці виводити 'Завершено!
*/
//  const handleSuccess = (msg) => console.log(`We did it - ${msg}`);
//  const handleError = (err) => console.log(`We've got some error - ${err}`);
//  const handleFinish = () => console.log("Hide loader");
// function makeMessage(handleSuccess, handleError) {
//   const result = Math.random() > 0.5;
//   setTimeout(() => {
//     if (result) { handleSuccess("🟢 УСПІХ!"); }
//     else { handleError("🔴 ПОМИЛКА!");}
//   }, 1000)
// }
// makeMessage(handleSuccess, handleError);

// теж саме на PROMISE

// const handleSuccess = (msg) => console.log(`We did it - ${msg}`);
// const handleError = (err) => console.log(`We've got some error - ${err}`);
// const handleFinish = () => console.log("Hide loader");
// function makeMessage() {
//   const promise = new Promise((resolve, reject) => {
//     const result = Math.random() > 0.5;
//     setTimeout(() => {
//       if (result) {
//         resolve("🟢 УСПІХ!");
//       } else {
//         reject("🔴 ПОМИЛКА!");
//       }
//     }, 1000);
//   });
//   return promise;
// }
// makeMessage().then(handleSuccess).catch(handleError).finally(handleFinish);

// =====================

//======== 3 =======
/**
 * - Використовуй prompt та повертай значення звідти.
 * - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс та логіруй "error".
 * Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
 */
const massage = +prompt('Input value');
function makePromise(mas) {
  if (isNaN(massage)) {
    return Promise.reject('error');
  };
  
  const result = massage % 2 === 0;
  const text = result ? 'even' : 'odd';
  const delay = result ? 1000 : 2000;
 
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(text)
    }, delay)
  });
  return promise;
}
  makePromise(massage).then(res=>console.log(res)).catch(er=>console.log('error'))
//====================

//=========== 4 =============
/**
 * Функція countWithDelay приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів повинна відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

// const countWithDelay = (delay = 0, times = 0, stepInterval = 0) => { 
//   for (let i = 0; i < times; i++) {
//     makePromise(delay, i + 1).then(logCount)
//     delay += stepInterval;
//   }

// };

// function makePromise(delay, count) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(count)
//     },delay)
//   });
// }

// function logCount(delay) {
//   console.log(delay);
// }

// countWithDelay(3000, 6, 1000);
  
//======= 5 ======
/*
 * Написати проміс, який одразу зарезолвиться і поверне число в resolve
 * Створити на ньому ланцюжок з 3 then. У кожному збільшувати попереднє число вдвічі.
 * На кінці вивести отримане число в консоль.
 *
 * Переробити завдання так, щоб один із промісів у ланцюжку виконався з помилкою (два способи)
 * На кінці ланцюжку розмістити метод catch, який спіймає цю помилку.
 * На кінці вивести повідомлення про те, що ланцюжок завершив виконання.
 * Перемістити метод catch в середину ланцюжка.
 */
  // Promise.resolve(7).then((num) => {
  //   return num * 2
  // })
  //   .then((num) => {
  //     return num * 2
  //   })
  //   .then(() => {
  //     //     return Promise.reject('error') - 1
  //     return error // - 2
  //   })
  //   .then(console.log)
  //   .catch(console.log)
  // .finally(()=> console.log('finally'))

  