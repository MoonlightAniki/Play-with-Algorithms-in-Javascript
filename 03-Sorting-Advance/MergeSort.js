function mergeSort(arr) {
  if (!arr || !arr.length) return;
  __mergeSort(arr, 0, arr.length - 1);
}

// 对 arr[l...r] 范围内元素进行归并排序
function __mergeSort(arr, l, r) {
  // if (l >= r) {
  //   return;
  // }
  // 优化1: 对小数组使用插入排序
  if (r - l <= 15) {
    __insertionSort(arr, l, r);
    return;
  }
  const mid = l + (r - l) / 2 | 0;
  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1]) {// 优化2: 有序数组不进行归并
    __merge(arr, l, mid, r);
  }
}

// 对 arr[l...mid] 和 arr[mid+1...r] 两部分进行归并
function __merge(arr, l, mid, r) {
  const aux = arr.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; ++k) {
    if (i > mid) {
      arr[k] = aux[j - l];
      ++j;
    } else if (j > r) {
      arr[k] = aux[i - l];
      ++i;
    } else if (aux[i - l] <= aux[j - l]) {
      arr[k] = aux[i - l];
      ++i;
    } else {
      arr[k] = aux[j - l];
      ++j;
    }
  }
}

// 对 arr[l...r] 范围内元素进行插入排序
function __insertionSort(arr, l, r) {
  for (let i = l + 1; i <= r; ++i) {
    const e = arr[i];
    let j;
    for (j = i; j - 1 >= l && arr[j - 1] > e; --j) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

// 自底向上的归并排序
function mergeSortBU(arr) {
  if (!arr || !arr.length) return;
  for (let sz = 1; sz <= arr.length; sz += sz) {
    // 每次对 2*sz 个元素进行归并
    for (let i = 0; i + sz /* 保证 arr[i+sz...i+2*sz-1] 左边界有效 */ < arr.length; i += sz + sz) {
      // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 两部分进行归并
      __merge(arr, i, i + sz - 1, Math.min(i + 2 * sz - 1, arr.length - 1)/* 保证 arr[i+sz...i+2*sz-1] 右边界不越界 */);
    }
  }
}

function mergeSortBU2(arr) {
  if (!arr || !arr.length) return;
  // 优化1: 小数组使用插入排序
  for (let i = 0; i < arr.length; i += 16) {
    __insertionSort(arr, i, Math.min(i + 15, arr.length - 1));
  }
  for (let sz = 16; sz <= arr.length; sz += sz) {
    for (let i = 0; i + sz < arr.length; i += sz + sz) {
      if (arr[i + sz - 1] > arr[i + sz]) {// 优化2: 已经有序的数组不进行归并
        __merge(arr, i, i + sz - 1, Math.min(i + 2 * sz - 1, arr.length - 1));
      }
    }
  }
}


// 只创建一个辅助数组
function mergeSort2(arr) {
  if (!arr || !arr.length) return;
  __mergeSort2(arr, arr.slice(), 0, arr.length - 1);
}

function __mergeSort2(arr, aux, l, r) {
  if (l >= r) return;
  const mid = l + (r - l) / 2 | 0;
  __mergeSort2(arr, aux, l, mid);
  __mergeSort2(arr, aux, mid + 1, r);
  __merge2(arr, aux, l, mid, r);
}

function __merge2(arr, aux, l, mid, r) {
  for (let i = l; i <= r; ++i) {
    aux[i] = arr[i];
  }
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; ++k) {
    if (i > mid) {
      arr[k] = aux[j];
      ++j;
    } else if (j > r) {
      arr[k] = aux[i];
      ++i;
    } else if (aux[i] <= aux[j]) {
      arr[k] = aux[i];
      ++i;
    } else {
      arr[k] = aux[j];
      ++j;
    }
  }
}

module.exports = {
  mergeSort,// 优化后的自顶向下的归并排序
  mergeSort2,// 只创建一个辅助数组的自顶向下的归并排序
  mergeSortBU,// 未做优化的自底向上的归并排序
  mergeSortBU2// 优化后的自底向上的归并排序
};