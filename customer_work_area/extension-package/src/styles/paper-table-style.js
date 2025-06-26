const $_documentContainer = document.createElement('template');

export const PaperTableStyle = `
  paper-table[rounded] {
    border-radius: 16px;
  }
  paper-row[rounded] {
    border-radius: 999px;
  }      
  paper-row[top-rounded]:first-of-type {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  paper-row[bottom-rounded]:last-of-type {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  paper-table[light-grey], paper-row[light-grey], paper-cell[light-grey] {
    background: var(--paper-grey-50);
  }
  paper-table[outline], paper-row[outline] {
    border: 1px solid rgba(0,0,0,0.06);
  }
  paper-table[dividers] paper-row:not(:last-of-type), paper-table[dividers] paper-header:not(:last-of-type), paper-header-content:not(:last-of-type), paper-header[divider], paper-header-content[divider], paper-row[divider] {
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  paper-table[grey], paper-row[grey], paper-cell[grey] {
    background-color: var(--paper-grey-200);
    color: var(--paper-grey-800);
  }
  paper-row[raised-on-scroll] {
    transition: box-shadow 0.1s;
  }
  paper-table[scrolled] > paper-row[raised-on-scroll] {
    @apply --shadow-elevation-2dp;
  } 

  paper-table[alternating] paper-row:nth-of-type(even), paper-table[white], paper-row[white], paper-cell[white], paper-header[white] {
    background: white;
    color: inherit;
  }

  paper-cell[icon] > paper-checkbox {
    --paper-checkbox-label-spacing: 0;
  }

  paper-cell > paper-input:not([underline]), paper-cell > katapult-drop-down:not([underline]), paper-cell > katapult-multi-drop-down:not([underline]) {
    --paper-input-container-underline_-_background-color: transparent;
    --paper-input-container-underline_-_display: none;
    --paper-input-container-underline: {
      background-color: transparent;
      display: none;
    };
  }
`;

$_documentContainer.innerHTML = `<dom-module id="paper-table-style">
  <template>
    <style>
      ${PaperTableStyle}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
