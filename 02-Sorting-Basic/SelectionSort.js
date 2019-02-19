// 选择排序
function selectionSort(arr) {
  if (!arr || !arr.length) return;
  for (let i = 0; i < arr.length; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

module.exports = { selectionSort };