// Polymer
import { PolymerElement } from '@polymer/polymer';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

// Styles
import '../styles/flex.js';
import '../styles/katapult-scrollbars.js';
import '../styles/paper-button-style.js';
import '../styles/paper-dialog-style.js';
import '../styles/paper-header-style.js';
import '../styles/paper-icon-button-style.js';
import '../styles/paper-input-style.js';
import '../styles/paper-table-style.js';
import '../styles/paper-tooltip-style.js';

// Modules
import { Path } from '../modules/Path.js';
import { ToArray } from '../modules/ToArray.js';

function _html(_strings, ...values) {
  const template = html(_strings, ...values);
  return html`
    <style
      include="flex paper-button-style paper-icon-button-style paper-table-style paper-header-style paper-dialog-style paper-tooltip-style paper-input-style katapult-scrollbars"
    ></style>
    ${template}
  `;
}
export { _html as html };

export class KatapultElement extends PolymerElement {
  get pageElement() {
    return document.getElementById('pageElement');
  }

  findDataHost(validator = () => true) {
    let parent = this.__dataHost ?? this.parentNode;
    while (parent != null && !validator(parent)) parent = parent.__dataHost;
    return parent;
  }

  get parentKatapultElement() {
    return this.findDataHost((elem) => elem instanceof KatapultElement);
  }

  ready() {
    super.ready();

    this.regex = {
      email: '.+@.+'
    };
  }

  /**
   * Convenience method to run `querySelector` on this local DOM scope
   *
   * @param {string} selector - Selector to run on this local DOM scope
   * @returns {Element} - Element found by the selector, or null if not found
   */
  $$(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  exists(x) {
    return x != null;
  }

  join(...args) {
    return this.joinDelim(',', ...args);
  }

  joinDelim(delim, ...args) {
    return Path.join(args, delim);
  }

  and(...args) {
    return args.every((x) => x);
  }

  or(...args) {
    return args.some((x) => x);
  }

  firstValid(...args) {
    return args.find((x) => x != null);
  }

  xor(...args) {
    return args.reduce((x, y) => !x != !y);
  }

  equal(...args) {
    return args.slice(1).every((x) => x == args[0]);
  }

  getSub(x, ...args) {
    return Path.get(x, Path.join(args, '.'));
  }

  includes(a, b) {
    return (a ?? []).includes(b);
  }

  isOneOf(x, ...args) {
    return args.some((y) => y == x);
  }

  sum(...args) {
    return args.reduce((total, x) => (total += x), 0);
  }

  toArray(...args) {
    return ToArray(...args);
  }

  array(...args) {
    return args;
  }

  getEventName(e) {
    return e.detail?.name ?? e.currentTarget?.getAttribute('name');
  }

  getDataPath(e) {
    // Get the data path from the element.
    const path = e.currentTarget?.dataset?.path;
    // Resolve any templated path parts, signified by "$()"
    const resolvedPath = path?.replace(/\$\(.*?\)/g, (substr) => Path.get(e, substr.slice(2, -1)));
    // Return the path.
    return resolvedPath;
  }

  getEventValue(e) {
    let value;
    // Get the value from the event (dependent upon the event's type).
    if (e.type == 'input') value = e.currentTarget?.value;
    // Get the value from the specified dataset value.
    else if (e.currentTarget?.dataset?.hasOwnProperty?.('value')) value = e.currentTarget.dataset.value;
    // Most polymer events will use this.
    else value = e.detail?.value;

    // Handle a few special cases.
    if (value == '$true') value = true;
    if (value == '$false') value = false;
    if (value == '$null') value = null;

    return value;
  }

  fire(name, detail, transcend = false) {
    if (name instanceof Event) {
      // If we are passed an event, ignore all other params.
      name = this.getEventName(name);
      detail = null;
      transcend = false;
    }
    const options = { detail };
    if (transcend) {
      options.bubbles = true;
      options.composed = true;
    }
    this.dispatchEvent(new CustomEvent(name, options));
  }

  /**
   * Performs a deep, notifying, path-creating set on the polymer object
   *
   * @param {string} path - dot-delimited property path to set
   * @param {any} value - value to set
   */
  deepSet(path, value) {
    Path.set(this, path, value);
    this.notifyWholePath(path);
  }

  /**
   * Runs `notifyPath` on each level of a Polymer property path string
   *
   * This method is necessary for when the path to notify was recently created (i.e. deeply-nested object properties)
   *
   * @param {string} path - Polymer property path string to notify
   */
  notifyWholePath(path) {
    let pathArray = path.split('.');
    for (let index = 0; index < pathArray.length; index++) {
      const path = pathArray.slice(0, index + 1).join('.');
      this.notifyPath(path);
    }
  }

  /**
   * Event handler which toggles a polymer property
   *
   * - Specify the path to the value to toggle using `path` or `data-path`
   *
   * @param {Event} e - PolymerDom event
   */
  toggleProperty(e) {
    // Get the path from the element.
    const dataPath = this.getDataPath(e);

    const subpath = e.detail.path ?? '';

    // Join the data path and the subpath.
    const path = Path.join([dataPath, subpath]);

    // Don't act on an empty path.
    if (!path) return;

    // Get the value from the path and set its opposite (notifying the whole path)
    const value = Path.get(this, path);
    this.deepSet(path, !value);
  }

  /**
   * Event handler which sets a polymer property
   *
   * - Specify the path to the value to update using the `data-path` dataset property
   * - Template the path using `$()` syntax (with the event as a data source)
   * - Specify a value parser using the `data-parse` dataset property
   *
   * @param {Event} e - PolymerDom event (containing a value)
   */
  updateProperty(e) {
    // Get the path from the element.
    const dataPath = this.getDataPath(e);

    // Get the path from the event (change subpath).
    const subpath = e.detail?.path ?? '';

    // Subtract the property name (as indicated by the event type) from the subpath.
    const property = Path.subtract(e.type, 'changed', '-')
      .map((x, i) => (i ? x[0].toUpperCase() + x.slice(1) : x))
      .join('');

    // Join the data path and the subpath.
    const path = Path.join([dataPath, ...Path.subtract(subpath, property)]);

    // Don't act on an empty path.
    if (!path) return;

    // Get the value from the event.
    let value = this.getEventValue(e);

    // Parse the value if directed
    const parse = e.currentTarget?.dataset?.parse;
    if (parse == 'bool') value === 'false' ? false : !!value;
    if (parse == 'int') value = !isNaN(parseInt(value)) ? parseInt(value) : '';
    if (parse == 'date') value = Date.parse(value);

    // Commit the change with a deep set
    this.deepSet(path, value);
  }

  /**
   * Event handler which opens a dialog with the provided ID
   *
   * - Specify the ID of the dialog using the `data-dialog-id` dataset property
   *
   * @param {Event} e - PolymerDom event
   */
  openDialog(e) {
    // Get the dialog's ID from the event
    const dialogId = e.currentTarget.dataset.dialogId;
    const dialog = this.$$(`#${dialogId}`);
    // Verify that we can open this dialog
    if (!dialog || typeof dialog != 'object' || typeof dialog?.open != 'function') {
      console.warn(`Dialog ${dialogId} not found or not an openable dialog`);
      return;
    }
    // Actually open the dialog
    dialog.open();
  }
}
