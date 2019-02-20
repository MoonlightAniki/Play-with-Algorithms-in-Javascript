const { generateRandomArray, generateNearlyOrderedArray, testSort } = require('../02-Sorting-Basic/SortTestHelper');
const { selectionSort } = require('../02-Sorting-Basic/SelectionSort');
const { insertionSort1, insertionSort2 } = require('../02-Sorting-Basic/InsertionSort');
const { bubbleSort } = require('../02-Sorting-Basic/BubbleSort');
const { shellSort } = require('../02-Sorting-Basic/ShellSort');
const { mergeSort, mergeSort2, mergeSortBU, mergeSortBU2 } = require('./MergeSort');
const { quickSort, quickSort2, quickSort2Ways } = require('./QuickSort');

console.log('============= Test Random Array =============');
const n = 10000000;
let arr1 = generateRandomArray(n, 0, n);
// let arr2 = arr1.slice();
// let arr3 = arr1.slice();
// let arr4 = arr1.slice();
let arr5 = arr1.slice();
let arr6 = arr1.slice();
let arr7 = arr1.slice();
let arr8 = arr1.slice();
let arr9 = arr1.slice();
let arr10 = arr1.slice();
let arr11 = arr1.slice();

// testSort('Selection Sort', selectionSort, arr1);
// testSort('Insertion Sort 1', insertionSort1, arr2);
// testSort('Insertion Sort 2', insertionSort2, arr3);
// testSort('Bubble Sort', bubbleSort, arr4);
testSort('Shell Sort', shellSort, arr5);
testSort('Merge Sort', mergeSort, arr6);
testSort('Merge Sort BU', mergeSortBU, arr7);
testSort('Merge Sort BU 2', mergeSortBU2, arr8);
testSort('Merge Sort 2', mergeSort2, arr9);
testSort('Quick Sort', quickSort, arr10);
testSort('Quick Sort 2', quickSort2, arr11);

console.log();
console.log('============= Test Nearly Ordered Array =============');
const swapTimes = 100;
arr1 = generateNearlyOrderedArray(n, swapTimes);
// arr2 = arr1.slice();
// arr3 = arr1.slice();
// arr4 = arr1.slice();
arr5 = arr1.slice();
arr6 = arr1.slice();
arr7 = arr1.slice();
arr8 = arr1.slice();
arr9 = arr1.slice();
arr10 = arr1.slice();
arr11 = arr1.slice();

// testSort('Selection Sort', selectionSort, arr1);
// testSort('Insertion Sort 1', insertionSort1, arr2);
// testSort('Insertion Sort 2', insertionSort2, arr3);
// testSort('Bubble Sort', bubbleSort, arr4);
testSort('Shell Sort', shellSort, arr5);
testSort('Merge Sort', mergeSort, arr6);
testSort('Merge Sort BU', mergeSortBU, arr7);
testSort('Merge Sort BU 2', mergeSortBU2, arr8);
testSort('Merge Sort 2', mergeSort2, arr9);
// testSort('Quick Sort', quickSort, arr10);
testSort('Quick Sort 2', quickSort2, arr11);
