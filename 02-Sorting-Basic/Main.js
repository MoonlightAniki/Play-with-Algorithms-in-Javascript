const { selectionSort } = require('./SelectionSort');
const { insertionSort1, insertionSort2 } = require('./InsertionSort');
const { bubbleSort } = require('./BubbleSort');
const { shellSort } = require('./ShellSort');
const { generateRandomArray, generateNearlyOrderedArray, testSort } = require('./SortTestHelper');

console.log('============= Test Random Array =============');
const n = 100000;
let arr1 = generateRandomArray(n, 0, n);
let arr2 = arr1.slice();
let arr3 = arr1.slice();
let arr4 = arr1.slice();
let arr5 = arr1.slice();

testSort('Selection Sort', selectionSort, arr1);
// testSort('Insertion Sort 1', insertionSort1, arr2);
testSort('Insertion Sort 2', insertionSort2, arr3);
// testSort('Bubble Sort', bubbleSort, arr4);
testSort('Shell Sort', shellSort, arr5);

console.log();
console.log('============= Test Nearly Ordered Array =============');
const swapTimes = 100;
arr1 = generateNearlyOrderedArray(n, swapTimes);
arr2 = arr1.slice();
arr3 = arr1.slice();
arr4 = arr1.slice();
arr5 = arr1.slice();

testSort('Selection Sort', selectionSort, arr1);
// testSort('Insertion Sort 1', insertionSort1, arr2);
testSort('Insertion Sort 2', insertionSort2, arr3);
// testSort('Bubble Sort', bubbleSort, arr4);
testSort('Shell Sort', shellSort, arr5);


