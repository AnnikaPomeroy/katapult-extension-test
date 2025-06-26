const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-button-style">
  <template>
    <style>
      @media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
        paper-button, paper-loading-button {
          outline: 0;
        }
      }
      paper-button, paper-loading-button {
        border-radius: 999px;
      }
      paper-button > iron-icon, paper-loading-button > iron-icon, paper-button > material-icon, paper-loading-button > material-icon {
        margin-right: 8px;
      }
      paper-button[outline] {
        border: 1px solid rgba(0,0,0,0.06) !important;
      }
      paper-button[primary-color] {
        --paper-button: {
            background-color: var(--primary-color);
            color: var(--primary-color-text-color);
          };
      }
      paper-button[secondary-color] {
        --paper-button: {
            background-color: var(--secondary-color);
            color: var(--secondary-color-text-color);
          };
      }
      paper-button[grey] {
        --paper-button: {
          background-color: var(--paper-grey-200);
          color: var(--paper-grey-800);
        }
      }
      paper-button[red] {
        --paper-button: {
          background-color: var(--paper-red-500);
          color: white;
        };
      }
      paper-button[amber] {
        --paper-button: {
          background-color: var(--paper-amber-500);
        };
      }
      paper-button[green] {
        --paper-button: {
          background-color: var(--paper-green-600);
          color: white;
        };
      }
      paper-button[white] {
        --paper-button: {
          background-color: white;
          color: var(--primary-text-color-faded);
        };
      }
      paper-loading-button[outline] {
        border: 1px solid rgba(0,0,0,0.06) !important;
      }
      paper-loading-button[primary-color] {
        background-color: var(--primary-color);
        color: var(--primary-color-text-color);
      }
      paper-loading-button[secondary-color] {
        background-color: var(--secondary-color);
        color: var(--secondary-color-text-color);
      }
      paper-loading-button[grey] {
        background-color: var(--paper-grey-200);
        color: var(--paper-grey-800);
      }
      paper-loading-button[red] {
        background-color: var(--paper-red-500);
        color: white;
      }
      paper-loading-button[amber] {
        background-color: var(--paper-amber-500);
        color: var(--primary-text-color-faded);
      }      
      paper-button iron-icon, paper-loading-button iron-icon {
        color: inherit;
      }
      paper-loading-button[white] {
        background-color: white;
        color: var(--primary-text-color-faded);
      }
      paper-button a, paper-loading-button a {
        color: inherit;
        text-decoration: none;
      }
      paper-loading-button[small] {
        --paper-loading-button-iron-collapse: {
          height: 24px;
        }
        --paper-loading-spinner: {
          margin-top: 2px;
          width: 20px;
          height: 20px;
        };
      }
      paper-button[small] {
        font-size: 9pt;
        padding: 5px 7px;
        min-width: 48px;        
      }
      paper-button[micro] {
        font-size: 8pt;
        padding: 5px 7px;
        min-width: 48px;
      }
      paper-button[no-uppercase] {
        text-transform: unset;     
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
