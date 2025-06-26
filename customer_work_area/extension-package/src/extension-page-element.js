// Polymer
import '@polymer/font-roboto/roboto.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-styles/color.js';

// Shoelace
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

// Styles
import './styles/sl-katapult-style.js';

// Elements
import './elements/sl-job-picker.js';
import './elements/sl-toolbar.js';
import './elements/sl-authentication.js';

// Mixins
import { KatapultElement, html } from './mixins/katapult-element.js';

function _html(_strings, ...values) {
  // Get template for passed in content.
  const template = html(_strings, ...values);
  return html`
    <style include="sl-katapult-style">
      :root {
        --sl-input-focus-ring-color: none;
      }
      :host {
        font-family: Roboto !important;
        display: flex;
      }
      * {
        font-family: Roboto !important;
      }
      main {
        height: 100%;
        width: 100%;
        background: var(--sl-color-gray-50);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 1;
        filter: blur(0px);
        transition:
          opacity 0.3s,
          filter 0.3s;
        pointer-events: auto;
      }
    </style>
    <sl-authentication>
      <main>
        <sl-toolbar
          support-num="{{supportNum}}"
          support-email="{{supportEmail}}"
          company-name="{{companyName}}"
          logo-link="{{logoLink}}"
        ></sl-toolbar>
        <!-- <sl-job-picker></sl-job-picker> -->
        <div>${template}</div>
      </main>
    </sl-authentication>
  `;
}
export { _html as html };

export class ExtensionPageElement extends KatapultElement {
  static get properties() {
    return {
      // Toolbar data determined by user
      supportNum: {
        type: String,
        value: ''
      },
      supportEmail: {
        type: String,
        value: ''
      },
      companyName: {
        type: String,
        value: ''
      },
      logoLink: {
        type: String,
        value: ''
      }
    };
  }
  constructor() {
    super();
  }
  ready() {
    super.ready();
  }
}
window.customElements.define('extension-page-element', ExtensionPageElement);
