var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add correctly', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('+'); // add() is called
    calculator.numberClick(1);
    calculator.operatorClick('=');

    assert.equal(calculator.runningTotal, 7);
  })

  it('it should subtract correctly', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(calculator.runningTotal, 5);
  })

  it('it should multiply correctly', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(8);
    calculator.operatorClick('=');

    assert.equal(calculator.runningTotal, 16);
  })

  it('it should divide correctly', function(){
    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    assert.equal(calculator.runningTotal, 4);
  })

  it('it should be able to click a number', function(){
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2);
  })

  it('it should be able to click an operator', function(){
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 21);
  })

  it('it should be able to clear everything', function(){
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
