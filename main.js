import { LitElement, html, css } from 'lit';
import 'katapult-pro-extended/src/elements/page-element/katapult-page-element.js';

export class MainPage extends LitElement {
  static properties = {}
  static styles = css`
    :host{
      --primary-color: var(--paper-light-green-500);
      --secondary-color: var(--paper-light-green-600);
      --accent-color: var(--paper-amber-600);
    }
  `
  render() {
    return html`
      <!-- Page Element Content -->
      <katapult-page-element .supportNum=${'111-111-1111'} .supportEmail=${'email@company.com'} .companyName=${'Company Name'} .logoLink=${''}>
      <!-- <katapult-job-picker></katapult-job-picker> -->
      <!-- <katapult-warning>Alert</katapult-warning> -->
      </katapult-page-element>
    `
  }
  constructor() {
    super();
  }
}
window.customElements.define('main-page', MainPage);
