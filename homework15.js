/* Опис ДЗ: Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали. */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * (8 - 0));
        const newIndex = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = newIndex;
    }
}

myBlend(arr);
console.log(arr);