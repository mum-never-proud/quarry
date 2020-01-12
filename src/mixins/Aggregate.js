import internals from '../priv-data';
import forEach from '../util/for-each';

export default class Aggregate {
  get() {
    const mined = internals.mined;
    internals.mined = [];

    return mined;
  }

  first() {
    return this.nth(0);
  }

  last() {
    return this.nth(internals.mined.length - 1);
  }

  nth(n) {
    return internals.mined[n];
  }

  sum(field) {
    let sum = 0;

    forEach(internals.mined, ele => sum += +ele[field]);

    return sum;
  }

  avg(field) {
    return this.sum(field) / this.count();
  }

  count() {
    return internals.mined.length;
  }

  all() {
    internals.mined = this.minerals;

    return this;
  }
}
