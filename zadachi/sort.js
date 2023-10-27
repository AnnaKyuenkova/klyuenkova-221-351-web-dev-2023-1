'use strict';
function getSortedArray(array, key) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j][key] > array[j + 1][key]) {
          let mas = array[j];
          array[j] = array[j + 1];
          array[j + 1] = mas;
        }
      }
    }
    return array;
}

let array = [{name: 'Макар', age: 20}, {name: 'Роберт', age: 32}, {name: 'Екатерина', age: 50}, {name: 'Оксана', age: 24}, {name: 'Святослав', age: 43}];
array = getSortedArray(array, 'age')
console.log(array); // [{name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}, {name: 'Екатерина', age: 50}];
  