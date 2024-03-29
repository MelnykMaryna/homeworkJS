// --- Operators ----

/* Task - 1
Create variable named myAge and set its value equal your agw
Display the sum of myAge + 30, using two variables: x and y. */
var myAge = (x = 28);
var y = 30;
console.log((myAge = x + y));

/* Task - 2
Create variable named dividedNumber and set its value equal myAge divided by 2
 * NOTE: you should use myAge variable here */
var dividedNumber;
var myAge = 28;
console.log((dividedNumber = myAge / 2));

/* Task - 3
Create variable named multipleNumber and set its value equal myAge multiply by 2 */
var multipleNumber;
var myAge = 28;
console.log((multipleNumber = myAge * 2));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'if' conditional ---

/* Task - 4
 Створіть програму, яка буде зберігати значення ваги кота. 
Якщо кіт важить менше 5 кг, то він маленький і його ще треба годувати, 
якщо більше 5, то кіт дуже пухнастий і його потрібно розчесати :) 

Переписати інструкцію if з використанням умовного оператора '?
*/

let cateWeight = 1;
if (cateWeight < 5) {
  console.log(`Кіт маленький, його треба годувати`);
} else {
  console.log(`кіт дуже пухнастий і його потрібно розчесати`);
}

/* /* Task - 5
Напишіть умову if, яка перевіряє, чи значення віку НЕ знаходиться між 18 і 50 включно, якщо це не так, то наймайте. 
Переписати інструкцію if з використанням умовного оператора '?  */

let age = 17;
if (age <= 18 || age <= 50) {
  console.log(`Hire`);
} else {
  console.log(`Do not hire`);
}

/* /* Task - 6
Переписати інструкцію if з використанням умовного оператора '?
 */

let height = 150;
if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
  console.log("Проходьте, будь ласка!");
}

/* Task - 7
Створіть сценарій. Запросіть у користувача вік. Якщо вік користувача більше ніж 18 
– виведіть на екран повідомлення «доступ дозволено». Якщо введене користувачем значення 
менше ніж 18 – виведіть на екран повідомлення «доступ заборонено»
 */

let age = 10;
if (age > 18) {
  console.log(`доступ дозволено`);
} else {
  console.log(`доступ заборонено`);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'switch' conditinal ---

/* Task - 8
Напишіть програму, яка буде показувати, до якої пори року належить певний номер місяця 
(наприклад, я вводжу "1" і вона повідомляє мені, що зараз зима, вводжу "5" - весна і т.д.). */

let season = 10;
switch (season) {
  case 1:
    console.log(`Winter`);
    break;
  case 2:
    console.log(`Spring`);
    break;
  case 3:
    console.log(`Summer`);
    break;
  case 4:
    console.log(`Autumn`);
    break;
  default:
    console.log(`There are only 4 seasons`);
}

/* /* Task - 9
Перепишіть "if" на "switch" */

let age = 10;
switch (true) {
  case (age < 16):
    console.log( "We cant hire u!");
    break;
  case (age >= 18):
    console.log("U can take full time job");
    break;
  case (age == 16 || age == 17):
    console.log("U can take part time job");
    break;
  default:
    console.log(`We can hire you`);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
