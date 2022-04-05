function Node(vall) {
  this.val = vall;
  this.next = null;
}

function ST() {
  this.top = null;
}

function Towers() {
  this.a = new ST();
  this.b = new ST();
  this.c = new ST();
}

ST.prototype.push = function(node) {
  if (!this.top) {
    this.top = node;
    node.next = null;
  } else {
    node.next = this.top;
    this.top = node;
  }
};
ST.prototype.pop = function() {
  if (!this.top) return null;
  let temp = this.top;
  this.top = this.top.next;
  return temp;
};

ST.prototype.peek = function() {
  if (this.top) {
    return this.top.val;
  }
};

ST.prototype.isEmpty = function() {
  if (this.head) return false;
  return true;
};

Towers.prototype.buildTower = function(n) {
  for (let discs = n; discs > 0; discs--) {
    this.a.push(new Node(discs));
  }
};

Towers.prototype.playGame = function(n, tp, tget, current) {
  var counts = 1;
  if (n > 0) {
    counts += this.playGame(n - 1, tget, tp, current);
  }
  if (this[current].peek()) {
    console.log(
      "Mover ",
      this[current].peek(),
      " desde ",
      current,
      " hacia ",
      tp
    );
    this[tp].push(this[current].pop());
  } else {
    counts -= 1;
  }
  
  if (
    this[tp].peek() > this[tget].peek() &&
    this[tget].peek() != null
  ) {
    counts += this.playGame(
      n - this[tget].peek(),
      tp,
      current,
      tget
    );
  }
  return counts;
};
var towers = new Towers();
towers.buildTower(3);
console.log(towers);
console.log(towers.playGame(3, "b", "c", "a"));
console.log(towers);
//MANUEL ALEJANDRO MENDOZA MORA 2B// 
