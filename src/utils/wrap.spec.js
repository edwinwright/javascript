import wrap from './wrap';

/** @test {wrap} */
describe('wrap()', function() {

  beforeAll(function() {

    // Define the markup
    this.markup = `<div class="parent">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>`;

  });

	beforeEach(function() {

    // Setup the elements
    this.parent = this.createFixture(this.markup);
    this.elems = this.parent.querySelectorAll('.child');
		this.wrapper = this.createFixture('<div class="wrapper"></div>');

	});

	it('should place the wrapper around the element', function() {

		wrap(this.elems[1], this.wrapper);
    expect(this.elems[1].parentNode).toEqual(this.wrapper);

	});


  it('should place the wrapper in the same position as the original element', function() {

    wrap(this.elems[1], this.wrapper);
    expect(this.parent.children[1]).toEqual(this.wrapper);

  });

  it('should place the wrapper around each element in the NodeList', function() {

    wrap(this.elems, this.wrapper);
    for (let i = 0; i < this.elems.length; i++) {
      expect(this.elems[i].parentNode).toEqual(this.wrapper);
      expect(this.elems[i].parentNode).not.toEqual(this.parent);
    }

  });

});
