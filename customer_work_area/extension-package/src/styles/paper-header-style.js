const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-header-style">
  <template>
    <style>
      paper-header-content[white] paper-header, paper-header[white] {
        background: white !important;
        color: var(--primary-text-color-faded);
      }
      paper-header-content[light-grey] paper-header, paper-header[light-grey] {
        background: var(--paper-grey-50);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
