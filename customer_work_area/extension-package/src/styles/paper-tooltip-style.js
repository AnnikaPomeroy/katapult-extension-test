const $_documentContainer = document.createElement('template');

export const PaperTooltipStyle = `
  paper-tooltip {
    --paper-tooltip: {
      background-color: var(--paper-grey-100);
      color: var(--primary-text-color);
      padding: 8px;
      border-radius: 999px;
      text-align: center;
      text-transform: uppercase;
      font-size: 10pt;
      @apply --shadow-elevation-2dp;
    };
    --paper-tooltip-delay-in: 300ms;
    --paper-tooltip-duration-in: 100ms;
    --paper-tooltip-duration-out: 100ms;
  }
`;

$_documentContainer.innerHTML = `<dom-module id="paper-tooltip-style">
  <template>
    <style>
      ${PaperTooltipStyle}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
