var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('Do the number buttons work to update the display of the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24');
  })

  it('Does addition work to update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  })

  it('Does subtraction work to update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('Does multiplication work to update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('30');
  })

  it('Does divide operation work to update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  })

  it('should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();

    element(by.css('#operator_divide')).click();

    element(by.css('#number2')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('should work for negative)', function(){
    running_total = element(by.css('#running_total'));

    element(by.css('#number8')).click();

    element(by.css('#operator_subtract')).click();

    element(by.css('#number2')).click();
    element(by.css('#number7')).click();

    element(by.css('#operator_multiply')).click();

    element(by.css('#number4')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-76');
  })

  it(' should work for decimals)', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#number0')).click();

    element(by.css('#operator_divide')).click();

    element(by.css('#number6')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('13.333333333333334');
  })

  it('should work for large numbers)', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number7')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();

    element(by.css('#operator_multiply')).click();

    element(by.css('#number4')).click();
    element(by.css('#number0')).click();
    element(by.css('#number7')).click();
    element(by.css('#number1')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3349252410');
  })

  it('should work in exceptional circumstances like if you divide by zero', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Error');
  })

});
