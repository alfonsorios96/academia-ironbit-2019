import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';

class I18nSelector extends LitElement {
  static get properties() {
    return {

    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
      
      </div>
      `;
    }
}

window.customElements.define("i18n-selector", I18nSelector);
