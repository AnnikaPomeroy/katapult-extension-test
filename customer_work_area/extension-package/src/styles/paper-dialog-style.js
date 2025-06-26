const $_documentContainer = document.createElement('template');

export const PaperDialogStyle = `
  paper-dialog > [title] {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14pt;
    text-transform: uppercase;
    margin-top: 0;
    border-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 16px;
  }
  paper-dialog > [title][column] {
    display: flex;
    flex-direction: column;
  }
  paper-dialog > [title][row] {
    display: flex;
    flex-direction: row;
  }
  paper-dialog > [title][primary-color] {
    background-color: var(--primary-color);
    color: var(--primary-color-text-color);
  }
  paper-dialog > [title][secondary-color] {
    background-color: var(--secondary-color);
    color: var(--secondary-color-text-color);
  }
  paper-dialog > [title][red] {
    background-color: var(--paper-red-500);
    color: white;
  }
  paper-dialog > [title][amber] {
    background-color: var(--paper-amber-500);
    color: var(--paper-grey-900);
  }
  paper-dialog > [title] > paper-icon-button, paper-dialog > [title] > iron-icon, paper-dialog > [title] > material-icon {
    padding: 0;
    margin: 0 8px;
    height: 24px;
    width: 24px;
  }
  paper-dialog > [title] iron-icon, paper-dialog > [title] material-icon {
    margin-right: 6px;
  }
  paper-dialog > [title][primary-color] > paper-icon-button, paper-dialog > [title][primary-color] > iron-icon, paper-dialog > [title][primary-color] > material-icon {
    color: var(--primary-color-text-color);
  }
  paper-dialog > [title][secondary-color] > paper-icon-button, paper-dialog > [title][secondary-color] > iron-icon, paper-dialog > [title][secondary-color] > material-icon {
    color: var(--secondary-color-text-color);
  }
  paper-dialog [subtitle] {
    margin-top: 4px;
    font-size: 12pt;
    4px; font-weight: lighter;
    text-transform: initial;
  }
  paper-dialog > [content] {
    margin: 0;
    padding: 16px;
  }
  paper-dialog > [content][center] {
    text-align: center;
  }
  paper-dialog > [content][column] {
    display: flex;
    flex-direction: column;
  }
  paper-dialog {
    border-radius: 16px;
  }
  paper-dialog .buttons, paper-dialog [buttons] {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 8px;
    gap: 8px;
  }
  paper-dialog .buttons paper-button, paper-dialog [buttons] paper-button {
    margin-top: 0;
    margin-bottom: 0;
  }
  paper-dialog .buttons paper-button:first-child, paper-dialog [buttons] paper-button:first-child {
    margin-left: 0;
  }
  paper-dialog .buttons paper-button:last-child, paper-dialog [buttons] paper-button:last-child {
    margin-right: 0;
  }
  paper-dialog .buttons [spacer], paper-dialog [buttons] [spacer] {
    flex-grow: 1; 
  }
`;

$_documentContainer.innerHTML = `<dom-module id="paper-dialog-style">
  <template>
    <style>
      ${PaperDialogStyle}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
