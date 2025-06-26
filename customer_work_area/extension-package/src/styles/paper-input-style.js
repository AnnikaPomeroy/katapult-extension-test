const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-input-style">
  <template>
    <style>
      paper-input {
        --primary-color: var(--secondary-color);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
