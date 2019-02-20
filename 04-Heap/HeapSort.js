const MaxHeap = require('./MaxHeap');

function heapSort(arr) {
  if (!arr || !arr.length) return;
  const heap = new MaxHeap();
  arr.forEach(e => heap.add(e));
  for (let i = arr.length - 1; i >= 0; --i) {
    arr[i] = heap.extractMax();
  }
}

function heapSort2(arr) {
  if (!arr || !arr.length) return;
  const heap = new MaxHeap(arr);
  for (let i = arr.length - 1; i >= 0; --i) {
    arr[i] = heap.extractMax();
  }
}

function heapSort3(arr) {
  if (!arr || !arr.length) return;
  const n = arr.length;
  // heapify
  for (let i = (n - 1 - 1) / 2 | 0; i >= 0; --i) {
    __shiftDown(arr, n - 1, i);
  }
  for (let i = n - 1; i >= 0; --i) {
    __swap(arr, 0, i);
    __shiftDown(arr, i - 1, 0);
  }
}

function __shiftDown(arr, r, k) {
  while (2 * k + 1 <= r) {
    let j = 2 * k + 1;
    if (j + 1 <= r && arr[j + 1] > arr[j]) {
      ++j;
    }
    if (arr[j] <= arr[k]) {
      break;
    }
    __swap(arr, k, j);
    k = j;
  }
}

function __swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

module.exports = {
  heapSort,
  heapSort2,
  heapSort3
};