// Практика 13.01.2024 
// 1
/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
*/

const btnRef = document.querySelector('#alertButton');
const inputRef = document.querySelector('#alertInput');

btnRef.addEventListener('click', () => {
    alert.inputRef.value;
})


// 2
/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
*/



// 3
   /*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>
*/

//const inputRef = document.querySelector('#passwordInput');
//const btnRef = document.querySelector('#passwordButton');

// btnRef.addEventListener('click', () => {
//     if(inputRef.type === 'password') {
//         inputRef.type = 'text';
//         btnRef.textContent = 'Приховати'
//     }
//     else {
//         inputRef.type = 'password';
//         btnRef.textContent = 'Розкрити'};
// })

// btnRef.addEventListener('click', () => {
//     const flag = inputRef.type === 'password';
//     inputRef.type = flag ? 'text' : 'password';
//     btnRef.textContent = flag ? 'Приховати' : 'Розкрити'
// })

// 4
/*
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

<style>
#box {
    width: 30px;
    height: 30px;
    background: red;
}
</style>

    <div>
        <div id="box"></div>
        <button id="decrease">Зменшити</button>
        <button id="increase">Збільшити</button>
    </div>
*/

//4
//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
    /* <div class="item"> 
  <h3>Заголовок</h3>
  <p>текст текст текст</p>
  </div> */
  }
  {
    /* <button class="add-btn">add</button>
    <div class="container"></div> */
  }
