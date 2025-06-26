const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-icon-button-style">
  <template>
    <style>
      paper-icon-button, paper-icon-loading-button {
        border-radius: 999px;
        --paper-icon-loading-button-paper-icon-button: {
          border-radius: 999px;
        };
      }
      paper-icon-button[raised], paper-icon-loading-button[raised] {
        @apply --shadow-elevation-2dp;
      }
      paper-button[outline] {
        border: 1px solid rgba(0,0,0,0.06);
      }
      paper-icon-button[primary-color], paper-icon-loading-button[primary-color] {
        --paper-icon-button: {
          background-color: var(--primary-color);
          color: var(--primary-color-text-color);
        };
      }
      paper-icon-button[secondary-color], paper-icon-loading-button[secondary-color] {
        --paper-icon-button: {
          background-color: var(--secondary-color);
          color: var(--secondary-color-text-color);
        };
      }
      paper-icon-button[grey], paper-icon-loading-button[grey] {
        --paper-icon-button: {
          background-color: var(--paper-grey-200);
          color: var(--paper-grey-800);
        };
      }
      paper-icon-button[white], paper-icon-loading-button[white] {
        --paper-icon-button: {
          background-color: white;
          color: var(--primary-text-color-faded);
        };
      }
      paper-icon-button[red], paper-icon-loading-button[red] {
        --paper-icon-button: {
          background-color: var(--paper-red-500);
          color: white;
        };
      }
      paper-icon-button[outline], paper-icon-loading-button[outline] {
        border: 1px solid rgba(0,0,0,0.1);
      }      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
