const $_documentContainer = document.createElement('template');

export const SlKatapultStyle = `
// Default styles for the elements
    :host {
        --header-spacing: 16px !important;
        --body-spacing: 8px 16px !important;
        --footer-spacing: 16px !important;
    }
    sl-dialog::part(panel) {
        border-radius: 16px;
        --width: fit-content;
    }
    sl-dialog::part(body), sl-dialog::part(footer), sl-dialog::part(title) {
        padding: 16px;
    }
    sl-button::part(label) {
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
    }
    sl-button::part(base) {
        border-radius: 16px;
    }
    sl-input::part(base) {
        box-shadow: none !important;
        font-family: Roboto;
        outline: none;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid var(--sl-color-gray-500);
    }
    sl-input::part(form-control-label) {
        font-size: 12px;
    }
    sl-input::part(password-toggle-button),
    sl-input::part(clear-button) {
        width: fit-content;
        padding: 0 4px;
    }
    sl-icon {
        color: var(--primary-color, darkgrey);
        font-size: 24px;
    }
    sl-icon-button {
        color: var(--primary-color, darkgrey);
        font-size: 24px;
    }
    sl-avatar {
        --size: 30px;
    }
    sl-menu {
        border: none;
        border-radius: 16px;
    }
    sl-icon-button::part(base) {
        padding: 0;
    }
    sl-dropdown::part(panel) {
        background: white;
        border-radius: 16px;
    }

// Attribute styles
    sl-dialog[no-x]::part(close-button) {
        display: none;
    }
    sl-dialog[no-actions]::part(header-actions) {
        display: none;
    }
    sl-dialog[filled]::part(header) {
        color: white;
        border-radius: 16px 16px 0 0;
        background: var(--primary-color, grey);
    }
    sl-dialog[filled]::part(title) {
        color: white;
        border-radius: 16px 16px 0 0;
        background: var(--primary-color, grey);
    }
    sl-dialog[centered]::part(header) {
        text-align: center;
    }
    sl-button[variant='primary']::part(base) {
        background: var(--primary-color, lightgrey);
    }
    sl-button[variant='primary']::part(base):hover {
        border-color: var(--secondary-color, grey);
    }
    sl-button[variant='default']::part(base) {
        background: white !important;
    }
    sl-button[variant='default']::part(base):hover {
        background: white !important;
        border-color: var(--primary-color, grey);
        color: var(--primary-color, black);
    }
    sl-icon[small] {
        font-size: 20px;
    }
    sl-icon[nine-dot] {
        font-size: 30px;
    }

// Revisit after searchable dropdown completed
    sl-select::part(combobox) {
        background: none;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid var(--sl-color-gray-500);
    }
`;

$_documentContainer.innerHTML = `<dom-module id="sl-katapult-style">
  <template>
    <style>
      ${SlKatapultStyle}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
