export default function(object) {
  return typeof object === 'object' ? object.constructor.name : undefined;
}
