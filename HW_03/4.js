"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function addition(num1, num2) {
  return num1 + num2;
}
const subtraction = (num1, num2) => {
  if (num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
};
const multiply = function (num1, num2) {
  return num1 * num2;
};
function division(num1, num2) {
  if (num1 > num2) {
    return num1 / num2;
  }
  return num2 / num1;
}
console.log(addition(5, 5)); // 10
console.log(subtraction(10, 5)); // 5
console.log(subtraction(2, 15)); //13
console.log(subtraction(2, 2)); //0
console.log(multiply(5, 5)); // 25
console.log(division(12, 4)); // 3
console.log(division(4, 20)); // 5
console.log(division(4, 4)); // 1
