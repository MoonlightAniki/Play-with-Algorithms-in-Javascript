// 希尔排序
function shellSort(arr) {
  if (!arr || !arr.length) return;
  let h = 1;
  const n = arr.length;
  while (h < (n / 3 | 0)) {
    h = 3 * h + 1;
  }
  while (h) {
    for (let i = h; i < n; ++i) {
      const e = arr[i];
      let j;
      for (j = i; j - h >= 0 && arr[j - h] > e; j -= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = e;
    }
    h = h / 3 | 0;
  }
}

module.exports = {
  shellSort
};