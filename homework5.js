Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): на першому рядку - одна зірочка, на другій дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри: висота трикутника та символ, яким його потрібно "малювати".

Приклад:

drawTriangle(5, *);

*
**
***
****
Умови виконання ДЗ

Домашню роботу необхідно зробити двома способами
В задачі не потрібно використовувати prompt або щось інше повязане з UI
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки


//Варіант1
function drawTriangle(height, symbol) {
    for (let i = 0; i < height; i++) {
      let row = '';
      for (let j = 0; j <= i; j++) {
        row += symbol;
      }
      console.log(row);
    }
  }
  
  drawTriangle(5, '*');


//Варіант 2
  function drawTriangle(height, symbol) {
    function drawLine(length, current = 0, row = '') {
      if (current === length) {
        console.log(row);
        return;
      }
  
      row += symbol;
      drawLine(length, current + 1, row);
    }
  
    for (let i = 1; i <= height; i++) {
      drawLine(i);
    }
  }
  
  drawTriangle(5, '*');

