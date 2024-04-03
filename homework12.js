/* Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число
Умови виконання ДЗ

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних:
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework4.
Додати туди ваше домашне завдання
Вислати вашу гілку */

function myTheory() {
    var even = 0;
    var odd = 0;
    var amount = 0; 
    var count = 100; // Define how many random numbers to generat
    
    for (let i = 0; i < count; i++) {
        var random = Math.round(Math.random() * (1000 - 100));
        amount++;
        if (random % 2 === 0) {
            even++;
        } else {
            odd++;
        }
        var persentageEvenToOdd = Math.round(((even / odd) * 100));
    }
    console.log (`Amount of numbers : ` + amount);
    console.log(`Even Numbers: ` + even +  ` and Odd Numbers: ` + odd);
    console.log (`Persentage even numbers to odd: ` +  persentageEvenToOdd + ` %`);
 
}

myTheory();



