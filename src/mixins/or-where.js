import internals from '../priv-data';
import filter from '../util/filter';

export default function(queryField, assertion, value) {
  if (internals.mined.length) {
    return internals.mined;
  }

  internals.mined = filter(this.minerals, queryField, assertion, value);

  return this;
}
