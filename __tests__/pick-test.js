import pick from '../src/util/pick';

describe('pick', function() {
  it('should pick selected fields from give object', function() {
    expect(Object.keys(pick(window.object, ['name', 'age']))).toEqual(['name', 'age']);
  });

  it('should not pick keys for undefined values', function() {
    expect(Object.keys(pick(window.object, ['name', 'id']))).toEqual(['name']);
  });

  it('should pick all keys when no fields given', function() {
    expect(Object.keys(pick(window.object))).toEqual(['name', 'age', 'education', 'skills']);
  });
});
