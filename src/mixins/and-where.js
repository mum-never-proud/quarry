import internals from '../priv-data';
import filter from '../util/filter';

export default function(queryField, assertion, value) {
  internals.mined = filter(internals.mined, queryField, assertion, value);

  return this;
}
