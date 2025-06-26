import { ExtensionPageElement, html } from './extension-page-element.js';

export class ExtensionTemplate extends ExtensionPageElement {
  static get template() {
    return html`
      <style>
        :host {
          /* Ideally the primary and secondary color should compliment each other or be different tones of the same color */
          --primary-color: var(--sl-color-indigo-700, grey) !important; /* Middle Color */
          --secondary-color: var(--sl-color-indigo-950, black) !important; /* Darkest Color */
          --accent-color: var(--sl-color-pink-700, orange) !important; /* Bright/Standout Color */
        }
      </style>
      <!-- Page Element Content -->
    `;
  }
  ready() {
    super.ready();

    // Define toolbar information for the page element
    this.supportNum = '111-111-1111';
    this.supportEmail = 'email@company.com';
    this.companyName = 'Company Name';
    this.logoLink = '';
  }
}
window.customElements.define('extension-template', ExtensionTemplate);
