// ====== tsk-3 =======
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє 
// його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення 
// в інпуті по краях від пробілів. Якщо інпут порожній або містить лише пробіли, то замість 
// імені у спан має підставлятися рядок "Anonymous".

// ====== Покращення: ========
// Використання параметру події: Хоча використання event.currentTarget.value не є неправильним, 
// оскільки ви вже вибрали #name-input зовні та прив'язали його до змінної textInput, ви можете 
// просто використовувати textInput.value для зручності читання та послідовності з рештою вашого 
// коду. Це також зробило б код трохи ефективнішим, не звертаючись до властивості через об'єкт 
// event кожного разу, коли відбувається подія.


const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value.trim() || "Anonymous";
});