// Polymer
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer';

// Shoelace
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// Styles
import '../styles/sl-katapult-style.js';
import '../styles/flex.js';

// Modules
import { SparkMD5 } from '../modules/_deprecated/SparkMD5.js';

class SlToolbar extends PolymerElement {
  static get template() {
    return html`
      <style include="flex sl-katapult-style">
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          z-index: 4;
        }
        ::slotted([title]) {
          font-size: var(--sl-font-size-large);
          color: var(--primary-color);
          font-weight: var(--sl-font-weight-bold);
        }
        #toolbar {
          height: 56px;
          padding: 4px 8px 4px 16px;
          box-sizing: border-box;
          background-color: white;
          box-shadow: var(--sl-shadow-medium);
        }
        .toolbar-icon {
          padding: 6px 12px;
        }
        sl-menu-item::part(base) {
          align-items: center;
          background: none;
        }
        sl-menu-item::part(prefix) {
          margin-bottom: 5px;
        }
        #help-dropdown::part(panel) {
          max-width: 100vw;
          width: 500px;
          padding: 24px;
        }
        #nine-dot-dropdown sl-menu-item::part(checked-icon),
        #nine-dot-dropdown sl-menu-item::part(suffix),
        #nine-dot-dropdown sl-menu-item::part(submenu-icon) {
          display: none;
        }
        #nine-dot-dropdown sl-menu-item::part(base) {
          padding: 0;
          width: 78px;
          height: 78px;
          max-width: 78px;
          max-height: 78px;
          flex-direction: column;
        }
        #nine-dot-dropdown sl-menu-item::part(label) {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
        #nine-dot-dropdown sl-menu-item sl-icon {
          display: flex;
          align-items: center;
          margin: auto;
        }
        #nine-dot-dropdown sl-menu-item::part(label) {
          margin: 0;
          align-items: start;
          max-height: 3em;
          white-space: normal;
          text-align: center;
          line-height: 1.2em;
          font-size: 14px;
          color: black;
          text-transform: capitalize;
        }
        #nine-dot-dropdown sl-menu {
          width: 250px;
          padding: 16px 5px 0 5px;
        }
        div.software-details {
          border-top: 1px solid var(--sl-color-gray-300);
          display: flex;
          flex-direction: column;
          font-size: 10pt;
          gap: 4px;
          padding-top: 16px;
        }
        div.software-details > p {
          margin: 0;
        }
        #logo {
          height: 36px;
          margin-right: 16px;
          pointer-events: none;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          -ms-interpolation-mode: nearest-neighbor;
        }
        * {
          font-family: Roboto !important;
        }
      </style>
      <div flex row id="toolbar">
        <!-- Left Container -->
        <div flex row align-center grow justify-start>
          <slot name="leftOfLogo"></slot>
          <template is="dom-if" if="{{logoLink}}">
            <img id="logo" src="{{logoLink}}" />
          </template>
          <slot name="rightOfLogo"></slot>
        </div>
        <!-- Center Container -->
        <div flex row align-center grow justify-center>
          <slot name="center"></slot>
        </div>
        <!-- Right Container -->
        <div flex row align-center grow justify-end>
          <slot name="right"></slot>
          <div flex row align-center>
            <!-- FOR THIS DROPDOWN, WE NEED TO FIX THE ANIMATION ON DROPDOWN.HIDE FROM RESIZING WEIRD DUE TO WIDTH STYLING -->
            <sl-dropdown id="help-dropdown">
              <sl-icon-button circle slot="trigger" class="toolbar-icon" pointer library="material" name="help_round"></sl-icon-button>
              <template is="dom-if" if="{{or(supportNum, supportEmail)}}">
                <p style="margin-top: 0;">
                  If you have questions or need support, please
                  <template is="dom-if" if="{{supportNum}}">call us at [[supportNum]]</template>
                  <template is="dom-if" if="{{and(supportNum, supportEmail)}}"> or </template>
                  <template is="dom-if" if="{{supportEmail}}"
                    >email us at
                    <a style="color: var(--primary-color); text-decoration: none;" href="mailto:{{supportEmail}}"
                      >[[supportEmail]]</a
                    ></template
                  >.
                </p>
              </template>
              <template is="dom-if" if="{{!or(supportNum, supportEmail)}}"><p style="margin-top: 0;">A Katapult Pro Extension</p></template>
              <div class="software-details">
                <p>
                  This webpage is hosted
                  <template is="dom-if" if="{{companyName}}">by {{companyName}}</template>
                  using Katapult Engineering's API, and extends the Katapult Pro software.
                </p>
                <p>Katapult does not manage or hold responsibility for this domain.</p>
              </div>
            </sl-dropdown>
            <sl-dropdown id="nine-dot-dropdown">
              <sl-icon-button class="toolbar-icon" pointer library="material" name="apps" slot="trigger"></sl-icon-button>
              <sl-menu flex row align-center justify-center style="flex-wrap: wrap;">
                <template is="dom-repeat" items="[[pages]]">
                  <sl-menu-item flex column on-click="openPage">
                    <sl-icon
                      nine-dot
                      flex
                      row
                      justify-center
                      wrap
                      slot="prefix"
                      library="material"
                      name="[[item.icon]]"
                      style="color: [[item.color]];"
                    ></sl-icon>
                    [[item.displayName]]
                  </sl-menu-item>
                </template>
              </sl-menu>
            </sl-dropdown>
            <sl-avatar class="toolbar-icon" pointer image="[[gravatarSrc]]"></sl-avatar>
            <sl-dropdown open></sl-dropdown>
          </div>
        </div>
      </div>
    `;
  }

  static get is() {
    return 'sl-toolbar';
  }
  static get properties() {
    return {
      logoLink: {
        type: String,
        value: ''
      },
      companyName: {
        type: String,
        value: ''
      },
      supportNum: {
        type: String,
        value: ''
      },
      supportEmail: {
        type: String,
        value: ''
      },
      pages: {
        type: Array,
        value: []
      },
      gravatarSrc: {
        type: String,
        computed: 'getGravatarSrc(email)'
      },
      email: {
        type: String,
        value: 'nking@katapultengineering.com',
        notify: true
      },
      refreshAPICheck: {
        type: Boolean,
        value: false
      },
      apiKey: {
        type: String,
        computed: 'getAPI(refreshAPICheck)'
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
    window.addEventListener('apiKeyChange', async () => {
      this.refreshAPICheck = !this.refreshAPICheck;
      await this.getJobData();
    });
    if (this.apiKey) this.getPages();
  }
  and(a, b) {
    return a && b;
  }
  or(a, b) {
    return a || b;
  }
  getGravatarSrc(email) {
    if (!email) return '';
    let hashedEmail = SparkMD5.hash(email);
    return `https://www.gravatar.com/avatar/${hashedEmail}?s=100&d=blank`;
  }
  getAPI(refreshAPICheck) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('api_key') || localStorage.getItem('apiKey') || '';
  }
  openPage(e) {
    const title = e.currentTarget.innerText.toLowerCase();
    const clickedPage = this.pages.filter(page => page.name == title)[0];
    const urlToVisit = 'https://' + this.currentDb + '.katapultpro.com/' + clickedPage.url;
    window.open(urlToVisit, '_blank');
  }
  async getPages() {
    const database = this.currentDb != 'database' ? this.currentDb + '.' : '';
    const fetchData = await fetch(`https://${database}katapultpro.com/api/v2/company-data/pages?api_key=${this.apiKey}`, {
      method: 'GET',
    }).then((res) => res.json());
    fetchData.forEach(page => {
      page.displayName = page.name.length > 20 ? page.name.slice(0, 15) + '...' : page.name;
      page.icon = page.icon +'_round';
    });
    this.pages = fetchData;
  }
}
window.customElements.define('sl-toolbar', SlToolbar);
