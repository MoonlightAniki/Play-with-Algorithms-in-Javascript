const {generateRandomArray, generateNearlyOrderedArray, testSort} = require('../02-Sorting-Basic/SortTestHelper');
const {heapSort, heapSort2, heapSort3} = require('./HeapSort');

const n = 10000000;
let arr1 = generateRandomArray(n, 0, n);
let arr2 = arr1.slice();
let arr3 = arr1.slice();

testSort('Heap Sort', heapSort, arr1);
testSort('Heap Sort 2', heapSort2, arr2);
testSort('Heap Sort 3', heapSort3, arr3);