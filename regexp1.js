// Напишіть регулярний вираз,який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)

var text = "Anything friends abc123 12345 apples";
var regexp = /[b-zB-Z]{6,}/g;
var res = text.match(regexp);
console.log(res);



