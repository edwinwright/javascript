import isNumeric from './isNumeric';

/** @test {isNumeric} */
describe('isNumeric()', function() {

  it('a pending spec');

	it('should return true when the value is numeric', function() {

		// Test cases for success
		var validValues = [
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

	it('should return false when the value is not numeric', function() {

		// Test cases for failure
		var invalidValues = [
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

    expect(true).toBe(false);

	});

});
