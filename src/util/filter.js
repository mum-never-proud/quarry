import { INVALID_ASSERTION } from '../constants';

import assertions from './assertions';
import internals from '../priv-data';
import traverse from './traverse';
import forEach from './for-each';
import pick from './pick';

export default function(arr, key, assertion, value, pickFields = internals.selectedFields) {
  if (!Reflect.has(assertions, assertion)) {
    throw Error(INVALID_ASSERTION);
  }

  const results = [];

  forEach(arr, obj => {
    if (assertions[assertion](traverse(obj, key), value)) {
      results.push(pick(obj, pickFields));
    }
  });

  return results;
}
