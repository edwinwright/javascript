import wrap from './wrap';

/** @test {wrap} */
describe('wrap()', function() {

	beforeEach(function() {
		this.parent = document.createElement('div');
		this.elem = document.createElement('div');
		this.parent.appendChild(this.elem);
		this.wrapper = document.createElement('div');
	});

  it('a pending spec', function() {
  	wrap(this.elem, this.wrapper);
  	expect(true).toBe(false);
  });

});
