import internals from '../src/priv-data';
import where from '../src/mixins/where';

describe('where', function() {
  it('should set mined elements based on filter', function() {
    where.call({ minerals: global.arrayOfObjects }, 'name', 'equals', arrayOfObjects[0].name);

    expect(internals.mined.length).toBeGreaterThan(0);
  });
});
