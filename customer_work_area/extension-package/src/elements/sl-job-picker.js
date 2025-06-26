// Polymer
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer';

// Shoelace
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

// Styles
import '../styles/sl-katapult-style.js';
import '../styles/flex.js';

class SLJobPicker extends PolymerElement {
  static get template() {
    return html`
      <style include="flex sl-katapult-style">
        .set-width {
          width: 312px;
        }
        #job-picker::part(overlay),
        #new-job-dialog::part(overlay) {
          display: none;
        }
        #job-picker::part(base),
        #new-job-dialog::part(base) {
          max-width: fit-content;
          max-height: fit-content;
          margin: auto;
        }
        #new-job-dialog::part(panel) {
          --width: 400px;
        }
      </style>
      <sl-dialog id="job-picker" filled centered no-actions open="[[pickerOpened]]" label="JOB PICKER">
        <div slot="header-actions"></div>
        <div flex row align-center>
          <template is="dom-if" if="{{!exists(jobData)}}">
            <sl-select class="set-width" disabled placeholder="Loading...">
              <sl-icon library="material" name="arrow_drop_down" slot="expand-icon"></sl-icon>
            </sl-select>
          </template>
          <template is="dom-if" if="{{exists(jobData)}}">
            <sl-select class="set-width" hoist placeholder="Select a Job" value="select_a_job">
              <sl-icon library="material" name="arrow_drop_down" slot="expand-icon"></sl-icon>
              <template is="dom-repeat" items="{{jobData}}">
                <sl-option>{{item.name}}</sl-option>
              </template>
            </sl-select>
          </template>
          <!-- <sl-icon style="margin-left: 12px; color: var(--sl-color-gray-700);" library="material" name="folder_round"></sl-icon> -->
        </div>
        <div flex space-between slot="footer">
          <sl-button id="job-picker-close" variant="default" on-click="close">Skip</sl-button>
          <sl-button variant="primary" on-click="openCreateJob">Create New Job</sl-button>
        </div>
      </sl-dialog>
      <sl-dialog id="new-job-dialog" filled centered no-actions open="[[newJobOpened]]" label="CREATE NEW JOB">
        <!-- <sl-input placeholder="Enter a new Job Name" label="Enter a new Job Name"></sl-input>
        <div>Searchable dropdown goes here</div> -->
        <div flex space-between slot="footer">
          <sl-button id="new-job-close" variant="default" on-click="close">Cancel</sl-button>
          <sl-button variant="primary" on-click="sendJobCall">Create Job</sl-button>
        </div>
      </sl-dialog>
    `;
  }

  static get is() {
    return 'sl-job-picker';
  }
  static get properties() {
    return {
      jobData: {
        type: Array,
        value: []
      },
      refreshAPICheck: {
        type: Boolean,
        value: false
      },
      apiKey: {
        type: String,
        computed: 'getAPI(refreshAPICheck)'
      },
      pickerOpened: {
        type: Boolean,
        value: true,
        reflect: true
      },
      newJobOpened: {
        type: Boolean,
        value: false,
        reflect: true
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
    if (this.apiKey) this.getJobData();
  }
  exists(jobData) {
    return jobData.length == 0 ? false : true;
  }
  close(e) {
    const id = e.currentTarget.id;
    switch (id) {
      case 'job-picker-close':
        this.set('pickerOpened', false);
        break;
      case 'new-job-close':
        this.set('newJobOpened', false);
        break;
    }
  }
  getAPI(refreshAPICheck) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('api_key') || localStorage.getItem('apiKey') || '';
  }
  async getJobData() {
    const database = this.currentDb != 'database' ? this.currentDb + '.' : '';
    const fetchData = await fetch(`https://${database}katapultpro.com/api/v3/jobs?api_key=${this.apiKey}`, {
      method: 'GET'
    }).then((res) => res.json());
    this.set('jobData', fetchData.data);
  }
  openCreateJob() {
    this.set('newJobOpened', true);
  }
  async sendJobCall() {
    const database = this.currentDb != 'database' ? this.currentDb + '.' : '';
    const body = { name: 'Annika POST Test', model: 'katapult', metadata: null };
    await fetch(`https://${database}katapultpro.com/api/v3/jobs?api_key=${this.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
}
window.customElements.define('sl-job-picker', SLJobPicker);
