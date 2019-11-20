const Room = function (area, painted) {
  this.area = area;
  this.painted = 0;
}


Room.prototype.addPaint = function(metersPainted) {
   return this.painted += metersPainted;
}


module.exports = Room;
