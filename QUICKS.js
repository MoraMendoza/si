class ListA {
  constructor(data) {
    this.array =  [] ;
    for (let i = 0; i < data; ++i) {
      this.array[i] = 0;
    }
    this.data = data;
  }
  toString() {
    return array.join();
  }
  insert(element) {
    array.push(element);
  }
  setData() {
    for (let i = 0; i < this.data; ++i) {
      this.array[i] = Math.floor(Math.random() * this.data+ 1);
    }
  }
  clear() {
    for (let i = 0; i < this.array.length; ++i) {
      this.array[i] = 0;
    }
  }
  swap(array, idx1, idx2) {
    let auxiliar = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = auxiliar;
  }
  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
  }
  quick(array, left, right) {
    let indexx;
    if (array.length > 1) {
      indexx = this.partition(array, left, right);
      if (left < indexx - 1) {
        this.quick(array, left, indexx - 1);
      }
      if (indexx < right) {
        this.quick(array, indexx, right);
      }
    }
  }
  partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
      i = left,
      o = right;
    while (i <= o) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[o] > pivot) {
        o--;
      }
      if (i <= o) {
        this.swap(array, i, o);
        movis++;
        i++;
        o--;
      }
    }
    return i;
  }
}

const quick = new ListA(10000);
var movis = 0;
for (let i = 0; i < 10; i++) {
  quick.setData();
  let start = new Date().getTime();
  quick.quickSort();
  var end = new Date().getTime();
  var elaps = end - start;
  console.log();
  console.log("time: " + elaps + " ms");
  console.log("move: " + movis * 2);
  quick.clear();
  movis = 0;
}
// 2B MENDOZA MORA MANUEL ALEJANDRO//  
  
