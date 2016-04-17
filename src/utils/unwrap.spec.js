import unwrap from './unwrap';

/** @test {unwrap} */
describe('unwrap()', function() {

	beforeEach(function() {
		this.context = document.createElement('div');
		this.wrapper = document.createElement('div');
		this.elem = document.createElement('div');
		this.context.appendChild(this.wrapper);
		this.wrapper.appendChild(this.elem);
	});

	it('a pending spec', function()  {
		unwrap(this.wrapper);
		expect(true).toBe(false);  	
	});

});
