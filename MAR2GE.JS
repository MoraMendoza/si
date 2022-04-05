 class MMArray {
  constructor(numeroDatos) {
    this.dataStore = [];
    this.pos = 0;
    this.gaps = [5, 3, 1];
    this.numeroDatos = numeroDatos;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.MergeSorting = MergeSorting;
    this.mergeArrays = mergeArrays;
    this.length = this.dataStore.length;
    for (let i = 0; i < numeroDatos; ++i) {
      this.dataStore[i] = 0;
    }
  }
}

function MergeSorting(arr = this.dataStore) {
  if (arr.length < 2) {
    return;
  }
  var paso = 1;
  var izquierda, derecha;
  while (paso < arr.length) {
    izquierda = 0;
    derecha =  paso;
    while (derecha +  paso<= arr.length) {
      mergeArrays(arr, izquierda, izquierda + paso, derecha, derecha +  paso);
      izquierda = derecha +  paso;
      derecha = izquierda +  paso;
    }
    if (derecha < arr.length) {
      mergeArrays(arr, izquierda, izquierda +  paso, derecha, arr.length);
    }
    paso *= 2;
  }
}
function mergeArrays(Arrayss, IniIzquierda, DetIzquierda, IniDerecha, DetDerecha) {
  var ADerecha = new Array(DetDerecha - IniDerecha + 1);
  let AIzquierda = new Array(DetIzquierda - IniIzquierda + 1);
  p = IniDerecha;
  for (let i = 0; i < ADerecha.length - 1; ++i) {
    ADerecha[i] = Arrayss[p];
    ++p;
  }
  p = IniIzquierda;
  for (let i = 0; i < AIzquierda.length - 1; ++i) {
    AIzquierda[i] = Arrayss[p];
    ++p;
  }
  ADerecha[ADerecha.length - 1] = Infinity; 
  AIzquierda[AIzquierda.length - 1] = Infinity; 
  let s = 0;
  let d = 0;
  for (let k = IniIzquierda; k < DetDerecha; ++k) {
    if (AIzquierda[s] <= ADerecha[d]) {
      Arrayss[k] = AIzquierda[s];
      pasos++;
      s++;
    } else {
      Arrayss[k] = ADerecha[d];
      d++;
      pasos++;
    }
  }
}
function setData() {
  for (let i = 0; i < this.numeroDatos; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * 10000 + 1);
  }
}
function clear() {
  for (let i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(datos) {
  this.dataStore[this.pos++] = datos;
}

let pasos = 0;

let numeros = new MMArray(10000);

for (let i = 0; i < 10; i++) {
  numeros.setData();
  let start = new Date().getTime();
  numeros.MergeSorting();
  let end = new Date().getTime();
  let transcurrido = end - start;
  console.log();
  console.log("Time: " + transcurrido + " ms");
  console.log("movis: " + pasos * 2);
  numeros.clear();
  movis = 0;
}
