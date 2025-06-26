export class Path {
  static get delim() {
    return 'JdReuPs2V3vy';
  }
  static copy(o) {
    if (o == null || typeof o !== 'object') return o;
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
      v = o[key];
      output[key] = typeof v === 'object' ? Path.copy(v) : v;
    }
    return output;
  }
  static escape(x) {
    return x.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  }
  static equal(a, b, delim) {
    delim = delim || '.';
    a = Path.pathToArray(a, delim);
    b = Path.pathToArray(b, delim);
    return Path.startsWith(a, b) && a.length == b.length;
  }
  static getSubset(obj, keys) {
    let temp = {};
    if (keys == null) return temp;
    for (let key of keys) temp[key] = obj[key];
    return temp;
  }
  static join(parts, delim) {
    delim = delim || '.';
    return Path.trim(
      parts
        .filter(Path.isValidKey)
        .map((x) => Path.trim(x, delim))
        .join(delim),
      delim
    );
  }
  static replace(path, delim, newDelim) {
    return Path.join(Path.split(path, delim), newDelim);
  }
  static shallowCopy(...args) {
    return Object.assign({}, ...args);
  }
  static split(path, delim) {
    delim = delim || '.';
    if (path == null) path = '';
    return Path.clean(path, delim).split(delim);
  }
  static subtract(a, b, delim) {
    delim = delim || '.';
    a = Path.pathToArray(a, delim);
    b = Path.pathToArray(b, delim);
    let i = a.findIndex((x, i) => b.every((y, j) => a[i + j] == b[j]));
    if (i == -1) return a;
    return [...a.slice(0, i), ...a.slice(i + b.length)];
  }
  /**
   *
   * @param {string} a The path.
   * @param {*} b The subpath.
   * @param {*} delim
   * @returns {boolean}
   */
  static startsWith(a, b, delim) {
    delim = delim || '.';
    a = Path.pathToArray(a, delim);
    b = Path.pathToArray(b, delim);
    return b.every((x, i) => a[i] == b[i] || (a[i] === '*' && b[i] != null) || (b[i] === '*' && a[i] != null));
  }
  static getWildcardValues(a, b, delim) {
    delim = delim || '.';
    a = Path.pathToArray(a, delim);
    b = Path.pathToArray(b, delim);
    // Take parts from b and map them to an array of their index if wild cards and -1 if not.  Remove all -1 values from array and map array to a values at the index of each item.
    return b
      .map((x, i) => (x == '*' ? i : -1))
      .filter((x) => x != -1)
      .map((x) => a[x]);
  }
  static setWildcardValues(path, values, delim) {
    values = Array.isArray(values) ? [...values] : [];
    delim = delim || '.';
    path = Path.pathToArray(path, delim).map((part, i) => {
      if (part == '*') {
        let val = values.shift();
        if (val != null) part = val;
      }
      return part;
    });
    return Path.join(path, delim);
  }
  static trim(path, delim) {
    delim = delim || '.';
    if (path == null) path = '';
    if (!isNaN(path)) path = path.toString();
    // Remove leading and trailing delimiters
    return path.replace(new RegExp(`(^\\${delim}*)|(\\${delim}*$)`, 'g'), '');
  }
  static clean(path, delim) {
    // First remove leading and trailing delimiters
    // Then remove any duplicate delimiters
    return Path.trim(path, delim).replace(new RegExp(`\\${delim}\\${delim}+`, 'g'), delim);
  }
  static valueIsEmpty(x) {
    let res;
    if (this.isObject(x)) {
      res = true;
      for (let key in x) {
        res = false;
        break;
      }
    } else {
      res = x == null;
    }
    return res;
  }
  static isObject(x) {
    return typeof x === 'object' && x != null;
  }
  static isValid(path, delim) {
    delim = delim || '.';
    if (path == null) return false;
    path = Path.pathToArray(path, delim);
    return path.every((x) => x != null);
  }
  static isValidKey(key) {
    // A key cannot be null or an empty string.
    return key != null && key !== '' && typeof key !== 'object';
  }
  static getPathReference(base, path, delim) {
    delim = delim || '.';
    path = Path.pathToArray(path, delim);
    if (!Path.isObject(base)) base = {};
    if (path.length) {
      let lastPathPartIndex = path.length - 1;
      let item = base;
      for (let i = 0; i < lastPathPartIndex; i++) {
        if (!Path.isObject(item[path[i]])) item[path[i]] = {};
        item = item[path[i]];
      }
      return { base, item, key: path[lastPathPartIndex] };
    } else {
      return { base, item: base, key: '' };
    }
  }
  static get(base, path, delim) {
    delim = delim || '.';
    path = Path.pathToArray(path, delim);
    let temp = base;
    for (let i = 0; i < path.length; i++) {
      if (temp == null) {
        // If temp is null (or undefined) then the data this path points to is also null.
        temp = undefined;
        break;
      }
      if (path[i] == '*') {
        let starVal = undefined;
        for (let key in temp) {
          if (temp[key] != null) {
            starVal = temp[key];
            break;
          }
        }
        temp = starVal;
      } else temp = temp[path[i]];
    }
    return temp;
  }
  static set(base, path, value, delim) {
    delim = delim || '.';
    path = Path.pathToArray(path, delim);
    let pathRef = Path.getPathReference(base, path, delim);
    if (Path.isValidKey(pathRef.key)) {
      pathRef.item[pathRef.key] = value;
    } else {
      pathRef.base = value;
    }
    return { base: pathRef.base, path, type: 'set' };
  }
  /**
   * Adds a new entry to an update object, but if this path is a subpath of an existing entry, the existing entry is updated.
   *
   * @param {Object} update - The update object.
   * @param {string} path - The update path.
   * @param {*} value - The value to set.
   * @returns
   */
  static setUpdate(update, path, value) {
    const pathParts = Path.split(path, '/');
    for (let i = 0; i < pathParts.length - 1; i++) {
      const subpath = pathParts.slice(0, i + 1).join('/');
      if (update.hasOwnProperty(subpath)) {
        const remainingPath = pathParts.slice(i + 1).join('/');
        return Path.set(update[subpath], remainingPath, value, '/');
      }
    }
    return Path.set(update, path, value);
  }

  static delete(base, path, delim) {
    delim = delim || '.';
    path = Path.pathToArray(path, delim);
    // Warning, this function will also collapse empty object/array paths.
    let pathRef = Path.getPathReference(base, path, delim);
    if (Path.isObject(pathRef)) {
      if (Path.isValidKey(pathRef.key)) {
        delete pathRef.item[pathRef.key];
        // Delete next level up if empty.
        if (Path.valueIsEmpty(pathRef.item)) {
          return Path.delete(pathRef.base, path.slice(0, -1), delim);
        }
      }
      return { base: !path.length || Path.valueIsEmpty(pathRef.base) ? null : pathRef.base, path, type: 'delete' };
    }
  }
  static setAndDelete(base, path, value, delim) {
    if (Path.valueIsEmpty(value)) return Path.delete(base, path, delim);
    return Path.set(base, path, value, delim);
  }
  static resolve(absolutePath, relativePath, delim) {
    delim = delim || '.';
    let pathParts = Path.split(absolutePath, delim).filter((x) => x);
    if (pathParts[0] === 'http:' || pathParts[0] === 'https:') pathParts[0] += delim;
    Path.split(relativePath, delim)
      .filter((x) => x)
      .forEach((part) => {
        if (part === '..') pathParts.splice(-1, 1);
        else pathParts.push(part);
      });
    return pathParts.join(delim);
  }
  static sanitizeDiffPath(path) {
    // Change path from null or [""] to [].
    if (path == null || (path.length == 1 && path[0] === '')) path = [];
    return path.map((x) => String(x));
  }
  static flattenObject(data, delim, options) {
    options = options || {};
    delim = delim || '.';
    let temp = {};
    for (let key in data) {
      if (Path.isObject(data[key])) {
        let flattenedData = Path.flattenObject(data[key], delim, options);
        for (let path in flattenedData) temp[key + delim + path] = flattenedData[path];
      } else if (typeof options.validate !== 'function' || options.validate(data[key], key, data)) temp[key] = data[key];
    }
    return temp;
  }
  static pathToArray(path, delim) {
    delim = delim || '.';
    if (!Array.isArray(path)) path = Path.split(path, delim);
    if (path.length == 1 && path[0] == '') path = [];
    return path;
  }
  static nullify(x) {
    return Path.valueIsEmpty(x) ? null : x;
  }
}
