import typeofObject from './typeof-object';

export default {
  equals(v1, v2) {
    return v1 === v2;
  },
  lessThan(v1, v2) {
    return v1 < v2;
  },
  greaterThan(v1, v2) {
    return v1 > v2;
  },
  lessThanOrEqualTo(v1, v2) {
    return v1 <= v2;
  },
  greaterThanOrEqualTo(v1, v2) {
    return v1 >= v2;
  },
  includes(v1, v2) {
    if (typeofObject(v1) === 'Array')
      return v1.includes(v2);
    return false;
  },
  excludes(v1, v2) {
    return !this.includes(v1, v2);
  },
  grep(v1, v2) {
    return new RegExp(v2, 'g').test(v1);
  }
}
