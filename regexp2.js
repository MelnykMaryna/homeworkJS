/* Опис ДЗ: В нас є масив обєктів в яких міститься email.

У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою. */

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


var filteredEmails = []; //змінна що буде зберігати значення
for(let obj of arr) {//заходмо в масив і перевіряємо кожне значення в масиві
var regex = /^[a-zA-Z0-9.]+@(gmail|yahoo)\.com$/; // Пропиcуємо умову
var result = regex.test(obj.email); //Перевірка адреси електронної пошти
if (result){ // Якщо результат перевірки true, то додаємо адресу до масиву
filteredEmails.push(obj.email);
}
}

console.log(filteredEmails);