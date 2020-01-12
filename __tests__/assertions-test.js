import assertions from '../src/util/assertions';

describe('assertions', function() {
  it('should return true when two values are equal', function() {
    expect(assertions.equals(1, 1)).toBeTruthy;
  });

  it('should return true when v1 is less than v2', function() {
    expect(assertions.lessThan(0, 1)).toBeTruthy;
  });

  it('should return true when v1 is less than or equal to v2', function() {
    expect(assertions.lessThanOrEqualTo(1, 1)).toBeTruthy;
    expect(assertions.lessThanOrEqualTo(0, 1)).toBeTruthy;
  });

  it('should return true v1 is greater than v2', function() {
    expect(assertions.greaterThan(1, 1)).toBeFalsy;
    expect(assertions.greaterThan(2, 1)).toBeTruthy;
  });

  it('should return true v1 is greater than or equal to v2', function() {
    expect(assertions.greaterThanOrEqualTo(1, 1)).toBeTruthy;
    expect(assertions.greaterThanOrEqualTo(0, 1)).toBeTruthy;
  });

  describe('includes', function() {
    it('should return true when v2 is present in v1', function() {
      expect(assertions.includes([1, 2], 2)).toBeTruthy;
      expect(assertions.includes([1, 2], 3)).toBeFalsy;
    });

    it('should return false when v1 is not an array', function() {
      expect(assertions.includes(1, 1)).toBeFalsy;
    });
  });

  describe('excludes', function() {
    it('should return true when v2 is not present in v1', function() {
      expect(assertions.excludes([1, 2], 3)).toBeTruthy;
      expect(assertions.excludes([1, 2], 2)).toBeFalsy;
    });
  });

  it('should return true when the given pattern is matched', function() {
    expect(assertions.grep('this is quarry', /quarry/)).toBeTruthy;
    expect(assertions.grep('this is quarry', /querry/)).toBeFalsy;

  })
});
