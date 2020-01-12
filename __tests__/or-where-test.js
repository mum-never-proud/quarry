import internals from '../src/priv-data';
import orWhere from '../src/mixins/or-where';

const arrayOfObjects = global.arrayOfObjects;

describe('or where', function() {
  beforeEach(function() {
    internals.mined = [];
  });

  it('should return result(s) if any one of the filters are assertive', function() {
    orWhere.call({ minerals: global.arrayOfObjects }, 'name', 'equals', 'shitty_name');

    expect(internals.mined.length).toEqual(0);

    orWhere.call({ minerals: global.arrayOfObjects }, 'name', 'equals', arrayOfObjects[5].name);

    expect(internals.mined.length).toBeGreaterThan(0);
  });

  it('should return the result as very first assertion', function() {
    orWhere.call({ minerals: global.arrayOfObjects }, 'name', 'equals', arrayOfObjects[1].name);

    expect(internals.mined.length).toEqual(1);

    orWhere.call({ minerals: global.arrayOfObjects }, 'name', 'equals', arrayOfObjects[5].name);

    console.log(arrayOfObjects[1].name, arrayOfObjects[5].name)

    expect(internals.mined[0].name).toEqual(arrayOfObjects[1].name);
  });
});
