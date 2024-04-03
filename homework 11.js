/* //Опис ДЗ: Написати свою реалізацію функції isNaN.
Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
Не викорисутовувати isNaN/ Number.isNaN// */

function myIsNan() {
  let str = `54`;
  if (str === null) {
    return false;
  }
  let num = Number.parseFloat(str);
  if (num !== num || num === undefined || typeof num !== "number") {
    return true;
  } else {
    return false;
  }
}
console.log(myIsNan());
