import stripUnits from './stripUnits';

/** @test {stripUnits} */
describe('stripUnits()', function() {

	it('removes units from value and returns a number', function() {
		expect(stripUnits('^5')).toBe(5);
		expect(stripUnits('hello')).toBeNaN();
		expect(stripUnits('hello-world')).toBeNaN();
		expect(stripUnits('12 2')).toBe(12);
		expect(stripUnits('$5098')).toBe(5098);
		expect(stripUnits('p123px')).toBe(123);
	});

});
