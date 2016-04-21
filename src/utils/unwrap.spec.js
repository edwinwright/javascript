import unwrap from './unwrap';

/** @test {unwrap} */
describe('unwrap()', function() {

  beforeAll(function() {

    // Define the markup
    this.markup = `<div class="parent">
      <div class="wrapper"><div class="child"></div></div>
      <div class="wrapper"><div class="child"></div></div>
      <div class="wrapper"><div class="child"></div></div>
    </div>`;

  });

  beforeEach(function() {

    // Setup the elements
    this.parent = this.createFixture(this.markup);
    this.elems = this.parent.querySelectorAll('.child');
    this.wrappers = this.parent.querySelectorAll('.wrapper');

  });

  it('should remove the wrapper element and replace it with its children', function() {

    unwrap(this.wrappers[1]);
    expect(this.wrappers[1].children.length).toBe(0);

  });

  it('should place the children in the same position as the original wrapper', function() {

    unwrap(this.wrappers[1]);
    expect(this.parent.children[1]).toEqual(this.elems[1]);

  });

});
