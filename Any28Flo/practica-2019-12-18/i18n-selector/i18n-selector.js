import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';

class I18nSelector extends LitElement {
  static get properties() {
    return {
      title = {type: String}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.title = "Welcome to my first component with litElement"
  }

  render() {
    return html`
        <h2> ${this.title}<h2>
      `;
    }
}

window.customElements.define("i18n-selector", I18nSelector);
