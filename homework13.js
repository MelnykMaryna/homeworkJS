/* Опис ДЗ: Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

Наприклад так:

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ */


var myCats = {
    catName1: `Leo`,
    catName2: `Alisa`,
    catBreed: `Without breed`,
    getInfo : function () {
        for (let i in this) {
            if (typeof this[i] !== 'function') {
                console.log(i + ` : ` + this[i]);
            }
        }
    }
}
myCats.getInfo();
myCats.age = `Leo - 1 year, Alisa - 2 years`;
myCats.hobbies = `to eat`
myCats.getInfo();

