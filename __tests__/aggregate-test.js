import Aggregate from '../src/mixins/Aggregate';
import internals from '../src/priv-data';

const arrayOfObjects = global.arrayOfObjects,
  sumOfAge = arrayOfObjects
              .map(a => a.age)
              .reduce((a, b) => a + b);

describe('aggregate', function() {
  let aggregate;

  beforeEach(function() {
    internals.mined = arrayOfObjects;
    aggregate = new Aggregate();
  });

  it('should get the mined results', function() {
    internals.mined = [global.object];

    expect(aggregate.get()).toEqual([global.object]);
  });

  it('should return first result', function() {
    expect(aggregate.first()).toEqual(arrayOfObjects[0]);
  });

  it('should return last result', function() {
    expect(aggregate.last()).toEqual(arrayOfObjects.slice(-1)[0]);
  });

  it('should return nth result', function() {
    expect(aggregate.nth(5)).toEqual(arrayOfObjects[5]);
  });

  it('should return count of mined elements', function() {
    expect(aggregate.count()).toEqual(arrayOfObjects.length);
  });

  it('should set mined to all elements', function() {
    aggregate.all.call({ minerals: arrayOfObjects });

    expect(internals.mined.length).toEqual(arrayOfObjects.length);
  });

  describe('sum', function() {
    it('should return sum of the field', function() {
      expect(aggregate.sum('age')).toEqual(sumOfAge);
    });

    it('should return NaN if any field value is NaN', function() {
      expect(aggregate.sum('name')).toEqual(NaN);
    });
  });

  describe('avg', function() {
    it('should return avg of the field', function() {
      expect(aggregate.avg('age')).toEqual(sumOfAge / arrayOfObjects.length);
    });

    it('should return NaN if any field value is NaN', function() {
      expect(aggregate.avg('name')).toEqual(NaN);
    });
  });
});
