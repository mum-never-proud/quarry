import internals from '../priv-data';

export default function() {
  internals.selectedFields = [...arguments];

  return this;
}
