import filter from '../src/util/filter';

const arrayOfObjects = global.arrayOfObjects,
  firstName = arrayOfObjects[0].name;

describe('filter', function() {
  it('should filter object with the give assertion', function() {
    expect(filter(arrayOfObjects, 'name', 'equals', firstName).length).toBeGreaterThan(0);
  });

  it('should return empty array when no object found', function() {
    expect(filter(arrayOfObjects, 'name', 'equals', 'shit_name').length).toEqual(0);
  });

  it('should throw error on invalid assertion', function() {
    expect(() => filter(arrayOfObjects, 'name', 'shitty_assertion', firstName)).toThrow(Error);
  });
});
