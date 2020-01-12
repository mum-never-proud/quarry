import forEach from '../src/util/for-each';

describe('for each', function() {
  it('should break the loop when the callback function returns "false"', function() {
    const array = [1, 2, 3, 4];
    let i = 0;

    forEach(array, function(v) {
      if (v === 2)
        return false;
      i++;
    });

    expect(i).toEqual(1);
  });

  it('should return undefined when not array', function() {
    const array = 'shit';
    let i = 0;

    forEach(array, function(v) {
      if (v === 2)
        return false;
      i++;
    });

    expect(i).toEqual(0);
  });
});
