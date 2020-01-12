import typeofObject from '../src/util/typeof-object';

describe('typeof object', function() {
  it('should return type as Array when array is passed', function() {
    expect(typeofObject([])).toEqual('Array');
  });

  it('should return type as object when an object is passed', function() {
    expect(typeofObject({})).toEqual('Object');
  })
});
