import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';

class I18nSelector extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} i18n-selector</h2>
      `;
    }
}

window.customElements.define("i18n-selector", I18nSelector);
