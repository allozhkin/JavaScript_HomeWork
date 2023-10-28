"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = [];
for (let i = 0; i <= 5; i++) {
  array.push(Math.trunc(Math.random() * 10));
}
console.log(`Массив: ${array}`);
let arraySum = 0;
for (const number of array) {
  arraySum += number;
}
console.log(`Сумма элементов массиива: ${arraySum}`);

let arrayMin = array[0];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (array[i] < arrayMin) {
    arrayMin = array[i];
  }
}
console.log(`минимальное значение в массиве ${arrayMin}`);

const newArray = [];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element === 3) {
    newArray.push(i);
  }
}
console.log(newArray);
