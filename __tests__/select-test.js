import select from '../src/mixins/select';
import internals from '../src/priv-data';

describe('select', function() {
  it('should set selected elements', function() {
    select('name', 'age');

    expect(internals.selectedFields).toEqual(['name', 'age']);
  });
});
