import uid from './uid';

/** @test {uid} */
describe('uid()', function() {

  it('should return a 4 character randomly generated id', function() {
    const id = uid();
    expect(id.length).toBe(4);
  });

});
