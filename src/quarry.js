import { NOT_ARRAY_ERROR } from './constants';

import typeofObject from './util/typeof-object';
import Aggregate from './mixins/Aggregate';

import andWhere from './mixins/and-where';
import extend from './mixins/extend';
import select from './mixins/select';
import orWhere from './mixins/where';
import where from './mixins/where';

class Quarry extends Aggregate {
  constructor(minerals) {
    super();

    if (!minerals || typeofObject(minerals) !== 'Array') {
      throw Error(NOT_ARRAY_ERROR);
    }

    this.minerals = minerals;

    return this;
  }
}

const $q = function(minerals) {
  return new Quarry(minerals);
}

extend(Quarry.prototype, { select, where, orWhere, andWhere });
extend($q, { extend });

export default $q;
