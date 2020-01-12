import traverse from '../src/util/traverse';

describe('traverse', function() {
  it('should traverse the object by its path', function() {
    expect(traverse(window.object, 'education.primary')).toEqual(window.object.education.primary);
  });

  it('should return undefined when path is invalid', function() {
    expect(traverse(window.object, 'education.invalid_key')).toEqual(undefined);
    expect(traverse(window.object, 'invalid_key')).toEqual(undefined);
  });

  it('should return undefined when no object and path is provided', function() {
    expect(traverse()).toEqual(undefined);
  });
});
