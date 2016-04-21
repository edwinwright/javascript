import {add, subtract, multiply, divide} from './testModule.js';

describe('ES6 modules', function() {

  describe('the add() function', function() {

    it('should add two numbers together', function() {
      expect(add(10, 4)).toEqual(14);
    });

  });

  describe('the subtract() function', function() {

    it('should subtract the second number from the first number', function() {
      expect(subtract(10, 4)).toEqual(6);
    });

  });

  describe('the multiply() function', function() {

    it('should multiply two numbers', function() {
      expect(multiply(10, 4)).toEqual(40);
    });

  });

  describe('the divide() function', function() {

    it('should divide the first number by the second number', function() {
      expect(divide(10, 4)).toEqual(2.5);
    });

  });

});
