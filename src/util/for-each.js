import typeofObject from "./typeof-object";

export default function(objects, callback) {
  if (typeofObject(objects) === 'Array') {
    const len = objects.length;
    let i = 0;

    for (; i < len; i++) {
      if (callback(objects[i], i) === false) {
        break;
      }
    }
  }
}
