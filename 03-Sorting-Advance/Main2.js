const { generateRandomArray, generateNearlyOrderedArray, testSort } = require('../02-Sorting-Basic/SortTestHelper');
const { quickSort, quickSort2, quickSort2Ways, quickSort3Ways } = require('./QuickSort');

const n = 80000;
console.log(`============= Test Random Array, Range: [0, ${n}] =============`);
let arr1 = generateRandomArray(n, 0, n);
let arr2 = arr1.slice();
let arr3 = arr1.slice();
let arr4 = arr1.slice();


testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort 2', quickSort2, arr2);
testSort('Quick Sort 2 Ways', quickSort2Ways, arr3);
testSort('Quick Sort 3 Ways', quickSort3Ways, arr4);

console.log();
console.log('============= Test Nearly Ordered Array =============');
const swapTimes = 100;
arr1 = generateNearlyOrderedArray(n, swapTimes);
arr2 = arr1.slice();
arr3 = arr1.slice();
arr4 = arr1.slice();

testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort 2', quickSort2, arr2);
testSort('Quick Sort 2 Ways', quickSort2Ways, arr3);
testSort('Quick Sort 3 Ways', quickSort3Ways, arr4);

console.log();
console.log('============= Test Random Array, Range: [0, 10] =============');
arr1 = generateRandomArray(n, 0, 10 );
arr2 = arr1.slice();
arr3 = arr1.slice();
arr4 = arr1.slice();

testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort 2', quickSort2, arr2);
testSort('Quick Sort 2 Ways', quickSort2Ways, arr3);
testSort('Quick Sort 3 Ways', quickSort3Ways, arr4);

