/* Опис ДЗ: Написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

рядок, до якого буде додаватися символ.
символ, який буде додаватися.
Скільки додавати символів
булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ */

let value = "text";
let symbol = "*";
let count = 14;
let addSymbol = true;

function myFunction() {
  if (value.length >= count) {
    return value;
  }
  let valueNew = symbol.repeat(count - value.length);
  if (addSymbol) {
    return valueNew + value;
  } else {
    return value + valueNew;
  }
}
console.log(myFunction());
