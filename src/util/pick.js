import { OBJECT_PATH_SPLITTER } from '../constants';

import traverse from './traverse';
import forEach from './for-each';

export default function(obj, fields = []) {
  if (!fields.length) {
    return obj;
  }

  const objWithSelectedFields = {};
  let val;

  forEach(fields, field => {
    val = traverse(obj, field);

    if (val) {
      objWithSelectedFields[field.split(OBJECT_PATH_SPLITTER).pop()] = val;
    }
  });

  return objWithSelectedFields;
}
