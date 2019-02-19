// 冒泡排序
function bubbleSort(arr) {
  if (!arr || !arr.length) return;
  let n = arr.length;
  while (n) {
    for (let i = 0; i + 1 < n; ++i) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    --n;
  }
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

module.exports = {
  bubbleSort
};