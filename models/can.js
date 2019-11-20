const Can = function (capacity){
  this.capacity = capacity;
}

Can.prototype.checkifEmpty = function () {
  if (this.capacity <= 0.5){
     return true
  } else {
    return false
  }
};

Can.prototype.emptySelf = function () {
    return this.capacity = 0;
};

module.exports = Can;
