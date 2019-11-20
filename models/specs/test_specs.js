const assert = require('assert');
const Room = require('../room.js');
const Can = require('../can.js');
const Decorator = require('../decorator.js');


// ################# ROOM

describe('room', function () {
  let room;

  beforeEach(function () {
    room = new Room( 50, 0 );
  });

  it('should have an area', function (){
    const actual = room.area;
    assert.strictEqual( actual, 50 );
  });

  it('should start not painted', function (){
    const actual = room.painted;
    assert.strictEqual( actual, 0);
  });

  it('should add painted meters', function() {
    const actual = room.addPaint(5);
    assert.strictEqual( actual, 5);
  });

});

// ################# CAN

  describe('can', function () {
    let can;

    beforeEach( function () {
        can = new Can (25);
    });

    it('should have some litres of paint', function() {
      const actual = can.capacity;
      assert.strictEqual( actual, 25);
    });

    it('should be able to check if empty', function() {
      can.capacity = 1;
      const actual = can.checkifEmpty();
      assert.strictEqual(actual, false );
    });

    it('should be able to empty itself', function() {
      can.capacity = 25;
      const actual = can.emptySelf();
      assert.strictEqual( actual, 0 );
    });


// ################# DECORATOR

    describe('decorator', function () {
      let decorator;

      beforeEach( function () {
        decorator = new Decorator;
      });

      it('it should start with empty stock', function () {
        const actual = decorator.stock;
        assert.deepStrictEqual( actual, [])
      });

      it('it should be able to add a can of paint to paint stock', function () {
        decorator.addCan(can);
        const actual = decorator.stock.length;
        assert.strictEqual( actual, 1)
      });

      it('it should be able to count litres of paint in stock', function () {
        decorator.addCan(can);
        const actual = decorator.countLitres();
        assert.strictEqual(actual, 25)
      });

    });



  });
