import internals from '../priv-data';
import filter from '../util/filter';

export default function(queryField, assertion, value) {
  internals.mined = filter(this.minerals, queryField, assertion, value);

  return this;
}
