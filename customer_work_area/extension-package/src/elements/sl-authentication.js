// Polymer
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer';

// Shoelace
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

// Styles
import '../styles/flex.js';
import '../styles/sl-katapult-style.js';

class SlAuthentication extends PolymerElement {
  static get template() {
    return html`
      <style include="sl-katapult-style flex">
        #loginForm::part(panel) {
          max-width: 330px;
        }
      </style>
      <!-- Api key needs to be entered, or was invalid when entered -->
      <template is="dom-if" if="[[!validApiKey]]">
        <sl-dialog id="loginForm" no-header open on-sl-request-close="keepOpen">
          <sl-input
            id="apiKeyInput"
            type="password"
            password-toggle
            clearable
            autofocus
            placeholder="API Key"
            label="API Key"
            help-text="Enter your API key for the selected database."
          >
            <sl-icon small library="material" slot="clear-icon" name="clear"></sl-icon>
            <sl-icon small library="material" slot="show-password-icon" name="visibility_off_round"></sl-icon>
            <sl-icon small library="material" slot="hide-password-icon" name="visibility_round"></sl-icon>
          </sl-input>
          <div flex column slot="footer">
            <sl-button variant="primary" on-click="checkAPI">Open API Tool</sl-button>
            <p style="color: var(--sl-color-gray-600); text-align: center; font-size: 14px; margin-bottom: 2px;">
              If you do not know how to access your API key, follow along with
              <a
                href="https://github.com/KatapultDevelopment/katapult-pro-api-documentation/blob/main/v2/DocumentationV2.MD#api-key-generation"
                >this</a
              >
              documentation.
            </p>
            <template is="dom-if" if="[[apiError]]">
              <p style="color: red; font-size: 14px; text-align: center; margin-top: 6px; margin-bottom: 2px;">
                Your API Key is invalid or is for a different database. Try again.
              </p>
            </template>
          </div>
        </sl-dialog>
      </template>

      <!-- Api key exists and is valid -->
      <template is="dom-if" if="[[validApiKey]]">
        <!-- The default slot -->
        <slot></slot>
      </template>
    `;
  }
  static get properties() {
    return {
      validApiKey: {
        type: Boolean,
        computed: 'checkForAPI(refreshAPICheck)'
      },
      refreshAPICheck: {
        type: Boolean,
        value: false
      },
      apiError: {
        type: Boolean,
        value: false
      },
      currentDb: {
        type: String,
        // value: 'database'
        value: 'dcs'
      }
    };
  }
  static get observers() {
    return [];
  }
  constructor() {
    super();
  }
  ready() {
    super.ready();
  }
  keepOpen(e) {
    e.preventDefault();
  }
  checkForAPI() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('api_key') || localStorage.getItem('apiKey') ? true : false;
  }
  async checkAPI() {
    const inputVal = this.shadowRoot.getElementById('apiKeyInput')?.value;
    if (inputVal) {
      const data = await this.getJobData(inputVal);
      if (data?.error == 'INVALID API KEY') this.apiError = true;
      else {
        localStorage.setItem('apiKey', inputVal);
        const event = new CustomEvent('apiKeyChange', { detail: 'data-change' });
        window.dispatchEvent(event);
        this.refreshAPICheck = !this.refreshAPICheck;
      }
    }
  }
  async getJobData(apiKey) {
    if (apiKey) {
      const database = this.currentDb != 'database' ? this.currentDb + '.' : '';
      const fetchData = await fetch(`https://${database}katapultpro.com/api/v2?api_key=${apiKey}`, {
        method: 'GET'
      }).then((res) => res.json());
      return fetchData;
    }
  }
}
window.customElements.define('sl-authentication', SlAuthentication);
