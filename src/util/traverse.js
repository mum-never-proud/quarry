import { OBJECT_PATH_SPLITTER } from '../constants';

import forEach from './for-each';

export default function(obj = {}, path = '') {
  const paths = path.split(OBJECT_PATH_SPLITTER);
  let temp = obj;

  forEach(paths, path => {
    if (typeof temp[path] === 'undefined') {
      temp = undefined;

      return false;
    }

    temp = temp[path];
  });

  return temp;
}
