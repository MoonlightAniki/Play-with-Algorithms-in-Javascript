class MaxHeap {
  constructor(arr) {
    this.data = [,];// data[0] 不存元素
    this.size = 0;
    if (arr instanceof Array) {
      arr.forEach(e => this.data.push(e));
      this.size = arr.length;
      for (let i = this.__parent(this.size); i > 0; --i) {
        this.__shiftDown(i);
      }
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(e) {
    this.data[this.size + 1] = e;
    this.size++;
    this.__shiftUp(this.size);
  }

  getMax() {
    if (this.size === 0) {
      throw new Error('heap is empty.');
    }
    return this.data[1];
  }

  extractMax() {
    const ret = this.getMax();
    this.__swap(this.data, 1, this.size);
    this.data.length--;
    this.size--;
    this.__shiftDown(1);
    return ret;
  }

  __shiftUp(k) {
    while (k > 1 && this.data[this.__parent(k)] < this.data[k]) {
      this.__swap(this.data, this.__parent(k), k);
      k = this.__parent(k);
    }
  }

  __shiftDown(k) {
    while (this.__leftChild(k) <= this.size) {
      let j = this.__leftChild(k);
      if (j + 1 <= this.size && this.data[j + 1] > this.data[j]) {
        ++j;
      }
      if (this.data[j] <= this.data[k]) {
        break;
      }
      this.__swap(this.data, k, j);
      k = j;
    }
  }

  __swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }

  __parent(index) {
    if (index <= 0) {
      throw new Error(`index ${index} doesn't have a parent.`);
    }
    return index / 2 | 0;
  }

  __leftChild(index) {
    return 2 * index;
  }

  __rightChild(index) {
    return 2 * index + 1;
  }
}

module.exports = MaxHeap;