import { NOT_OBJECT_ERROR } from '../constants';

const validTypes = ['object', 'function'];

export default function(target, ...sources) {
  if (!validTypes.includes(typeof target)) {
    throw Error(NOT_OBJECT_ERROR);
  }

  let prop;

  sources.forEach(source => {
    if (typeof source === 'object') {
      for (prop in source) {
        target[prop] = source[prop];
      }
    }
  });

  return target;
}
