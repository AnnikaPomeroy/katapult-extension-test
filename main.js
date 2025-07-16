// Lit
import { LitElement, html, css, unsafeCSS } from 'lit';
import { when } from 'lit/directives/when.js';
import { map } from 'lit/directives/map.js';

// Katapult
import 'katapult-pro-extended/elements/page-element/katapult-page-element.js';
import { KatapultFlex } from 'katapult-pro-extended/styles/katapult-flex.js';

// Shoelace
import '@shoelace-style/shoelace/dist/components/card/card.js';

export class MainPage extends LitElement {
  static properties = {
    jobData: {type: Array}
  }
  static styles = [
    unsafeCSS(KatapultFlex),
    css`
      :host {
        --primary-color: var(--paper-light-green-500);
        --secondary-color: var(--paper-light-green-600);
        --accent-color: var(--paper-amber-600);
      }
      katapult-page-element::part(content-wrapper) {
        align-content: center;
      }
      sl-card::part(body) {
        display: flex;
        flex-direction: row;
      }
  `]
  render() {
    return html`
      <!-- Page Element Content -->
      <katapult-page-element .supportNum=${'111-111-1111'} .supportEmail=${'email@company.com'} .companyName=${'Company Name'} .logoLink=${''} .includeToolbarJobPicker=${true}>
        <!-- Slotted content -->
        <katapult-job-dropdown id="job-dropdown" slot="toolbar-left" @change=${() => this.displayJobData()}></katapult-job-dropdown>

        <!-- Default Slot Content -->
        ${when(
          this.jobData?.length > 0,
          () => html`
            <sl-card flex row style="justify-self: center; text-align: center;">
              ${map(
                this.jobData,
                (attribute) => html`
                <div style="width: fit-content; margin: 0 12px;">
                  <div style="color: var(--primary-color, black);"><strong>${attribute.name}</strong></div>
                  <div>${attribute.value}</div>
                </div>
                `
              )}
            </sl-card>
          `
        )}
      </katapult-page-element>
    `
  }
  constructor() {
    super();
  }
  displayJobData() {
    const jobObj = this.shadowRoot.getElementById('job-dropdown').getSelectedJob();
    this.jobData = Object.entries(jobObj).map(attribute => ({name: attribute[0], value: attribute[1]}));
  }
}
window.customElements.define('main-page', MainPage);
