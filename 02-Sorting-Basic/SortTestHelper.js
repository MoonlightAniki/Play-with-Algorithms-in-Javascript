// 生成随机数组，元素取值范围 [rangeL,
function generateRandomArray(n, rangeL, rangeR) {
  if (rangeL > rangeR) {
    throw new Error('illegal arguments');
  }
  const arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push((Math.random() * (rangeR - rangeL + 1) | 0) + rangeL);
  }
  return arr;
}

// 生成近乎有序的数组
function generateNearlyOrderedArray(n, swapTimes) {
  const arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push(i);
  }
  for (let i = 0; i < swapTimes; ++i) {
    const x = Math.random() * n | 0;
    const y = Math.random() * n | 0;
    swap(arr, x, y);
  }
  return arr;
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

// 判断数组是否从小到大排列
function isSorted(arr) {
  for (let i = 0; i + 1 < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// 测试排序算法
function testSort(sortName, sortFunc, arr) {
  const startTime = Date.now();
  sortFunc(arr);
  const endTime = Date.now();
  if (!isSorted(arr)) {
    throw new Error(`arr is not sorted.`);
  }
  console.log(`${sortName}, time: ${endTime - startTime} ms.`);
}

module.exports = {
  generateRandomArray,
  generateNearlyOrderedArray,
  testSort
};


