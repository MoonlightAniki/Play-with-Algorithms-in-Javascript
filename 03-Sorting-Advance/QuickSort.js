function quickSort(arr) {
  if (!arr || !arr.length) return;
  __quickSort(arr, 0, arr.length - 1);
}

function __quickSort(arr, l, r) {
  if (l >= r) return;
  const p = __partition(arr, l, r);
  __quickSort(arr, l, p - 1);
  __quickSort(arr, p + 1, r);
}

function __partition(arr, l, r) {
  const v = arr[l];
  // arr[l+1...j]<v, arr[j+1...i)>v
  let j = l;
  for (let i = l + 1; i <= r; ++i) {
    if (arr[i] < v) {
      swap(arr, j + 1, i);
      ++j;
    }
  }
  swap(arr, l, j);
  return j;
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}


function quickSort2(arr) {
  if (!arr || !arr.length) return;
  __quickSort2(arr, 0, arr.length - 1);
}

function __quickSort2(arr, l, r) {
  if (l >= r) return;
  const p = __partition2(arr, l, r);
  __quickSort2(arr, l, p - 1);
  __quickSort2(arr, p + 1, r);
}

function __partition2(arr, l, r) {
  swap(arr, l, l + Math.random() * (r - l + 1) | 0);
  const v = arr[l];
  // arr[l+1...j]<v, arr[j+1...i)>v
  let j = l;
  for (let i = l + 1; i <= r; ++i) {
    if (arr[i] < v) {
      swap(arr, j + 1, i);
      ++j;
    }
  }
  swap(arr, l, j);
  return j;
}

function quickSort2Ways(arr) {
  if (!arr || !arr.length) return;
  __quickSort2Ways(arr, 0, arr.length - 1);
}

function __quickSort2Ways(arr, l, r) {
  if (l >= r) return;
  const p = __partition3(arr, l, r);
  __quickSort2Ways(arr, l, p - 1);
  __quickSort2Ways(arr, p + 1, r);
}

function __partition3(arr, l, r) {
  swap(arr, l, l + Math.random() * (r - l + 1) | 0);
  const v = arr[l];
  // arr[l+1...i)<v, arr(j...r]>v
  let i = l + 1;
  let j = r;
  while (true) {
    while (i <= r && arr[i] < v) ++i;
    while (j >= l && arr[j] > v) --j;
    if (i >= j) break;
    swap(arr, i, j);
    ++i;
    --j;
  }
  swap(arr, l, j);
  return j;
}

function quickSort3Ways(arr) {
  if (!arr || !arr.length) return;
  __quickSort3Ways(arr, 0, arr.length - 1);
}

function __quickSort3Ways(arr, l, r) {
  if (l >= r) return;
  const { lt, gt } = __partition4(arr, l, r);
  __quickSort3Ways(arr, l, lt);
  __quickSort3Ways(arr, gt, r);
}

function __partition4(arr, l, r) {
  swap(arr, l, l + Math.random() * (r - l + 1) | 0);
  const v = arr[l];
  // arr[l+1...lt]<v, arr[lt+1...i)===v, arr[gt...r]>v
  let lt = l;
  let gt = r + 1;
  let i = l + 1;
  while (i < gt) {
    if (arr[i] < v) {
      swap(arr, lt + 1, i);
      ++lt;
      ++i;
    } else if (arr[i] > v) {
      swap(arr, i, gt - 1);
      --gt;
    } else {
      ++i;
    }
  }
  swap(arr, l, lt);
  --lt;
  return { lt, gt };
}

module.exports = {
  quickSort,
  quickSort2,
  quickSort2Ways,
  quickSort3Ways
};