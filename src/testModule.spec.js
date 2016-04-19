import {add, subtract, multiply, divide} from './testModule.js';


// console.log(add);

describe('The add() function', function() {

  it('should add two numbers together', function() {
    expect(add(10, 4)).toEqual(14);
  });

});

describe('The subtract() function', function() {

  it('should subtract the second number from the first number', function() {
    expect(subtract(10, 4)).toEqual(6);
  });

});

describe('The multiply() function', function() {

  it('should multiply two numbers', function() {
    expect(multiply(10, 4)).toEqual(40);
  });

});

describe('The divide() function', function() {

  it('should divide the first number by the second number', function() {
    expect(divide(10, 4)).toEqual(2.5);
  });

});

