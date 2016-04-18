import isNumeric from './isNumeric';

/** @test {isNumeric} */
describe('isNumeric()', function() {

  // Test cases for success
	it('should return true when the value is numeric', function() {
		const validValues = [
			1,
			+1,
			-1,
			1.1,
			'1',
			'+1',
			'-1',
			'1.1',
			Number.MAX_VALUE,
			Number.MIN_VALUE
		];
		validValues.forEach(value => expect(isNumeric(value)).toBe(true));
	});

	// Test cases for failure
  it('should return false when the value is not numeric', function() {
		const invalidValues = [
			'a',
			'1-2',
			'1a',
			'one',
			'2005/12/12',
			Number.NaN,
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			undefined,
			null,
			true,
			false,
			{},
			[],
			function(){}
		];
		invalidValues.forEach(value => expect(isNumeric(value)).toBe(false));
	});

});
