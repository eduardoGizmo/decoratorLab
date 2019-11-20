const Decorator = function (stock) {
  this.stock = []
}


Decorator.prototype.addCan = function (cans) {
      this.stock.push(cans);
}

Decorator.prototype.countLitres = function (){
    return this.stock.length * 25;
}

module.exports = Decorator;
