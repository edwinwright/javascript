import stripUnits from './stripUnits';

/** @test {stripUnits} */
describe('stripUnits()', function() {

	it('should strip non-numeric characters on either side of a number and return a numeric value', function() {

    const validValues = [
      ['^5', 5],
      ['12 2', 12],
      ['$5098', 5098],
      ['p123px', 123],
    ];

    validValues.forEach(value => expect(stripUnits(value[0])).toBe(value[1]));

	});

  it('should return NaN if the input value can\'t be converted to a number', function() {

    const invalidValues = [
      'hello',
      'hello-world',
    ];

    invalidValues.forEach(value => expect(stripUnits(value[0])).toBeNaN());

  });

});
