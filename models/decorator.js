const Decorator = function (stock) {
  this.stock = []
}


Decorator.prototype.addCan = function (cans) {
      this.stock.push(cans);
}

module.exports = Decorator;
