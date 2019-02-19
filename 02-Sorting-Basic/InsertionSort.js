// 插入排序
function insertionSort1(arr) {
  if (!arr || !arr.length) return;
  for (let i = 1; i < arr.length; ++i) {
    for (let j = i; j - 1 >= 0 && arr[j - 1] > arr[j]; --j) {
      swap(arr, j - 1, j);
    }
  }
}

// 优化后的插入排序
function insertionSort2(arr) {
  if (!arr || !arr.length) return;
  for (let i = 1; i < arr.length; ++i) {
    const e = arr[i];
    let j;
    for (j = i; j - 1 >= 0 && arr[j - 1] > e; --j) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

module.exports = {
  insertionSort1,
  insertionSort2
};

