import { Path } from './Path.js';

/**
 * @deprecated ToArray modifies the object passed in by adding a property called `$key`. So passing in an object which will update Firebase or one that is two-way bound will cause an error unless you delete that key first. Use [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) instead.
 */
export function ToArray(x, $key, options = {}) {
  options.$keyToUse ??= '$key';
  let temp = [];
  if (Array.isArray(x)) {
    temp = x;
  } else if (Path.isObject(x)) {
    temp = Object.keys(x).map((key) => {
      let val = x[key];
      let item = {};
      if (Path.isObject(val)) item = val;
      else item.$val = val;
      if (item[options.$keyToUse] == null) item[options.$keyToUse] = key;
      return item;
    });
  } else if (x != null) {
    if ($key) temp = [{ $key: '$val', $val: x }];
    else temp = [x];
  }
  if ($key === undefined) {
  } else if ($key) {
    temp = temp.map((item, i) => {
      if (!Path.isObject(item)) {
        item = { $key: i, $val: item };
      } else if (item.$key == null) {
        item.$key = i;
      }
      return item;
    });
  } else {
    temp = temp.map((item, i) => {
      if (Path.isObject(item)) {
        if (item.$val !== undefined) item = item.$val;
        else for (let prop in item) if (prop[0] === '$') delete item[prop];
      }
      return item;
    });
  }
  return temp;
}
