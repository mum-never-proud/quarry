import internals from '../src/priv-data';
import andWhere from '../src/mixins/and-where';

const arrayOfObjects = global.arrayOfObjects;

describe('and where', function() {
  it('should return result(s) if all the filters are assertive', function() {
    internals.mined = arrayOfObjects.slice(0, 3);

    expect(internals.mined.length).toEqual(3);

    andWhere('name', 'equals', arrayOfObjects[0].name);

    expect(internals.mined.length).toBeGreaterThan(0);
  });

  it('should return empty array if the filter counldnt yield result from mined elements', function() {
    internals.mined = arrayOfObjects.slice(0, 3);

    expect(internals.mined.length).toEqual(3);

    andWhere('name', 'equals', arrayOfObjects[5].name);

    expect(internals.mined.length).toEqual(0);
  });
});
