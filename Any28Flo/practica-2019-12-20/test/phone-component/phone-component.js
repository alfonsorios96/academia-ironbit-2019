import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';

class PhoneComponent extends LitElement {
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
        <h2>${this.hello} phone-component</h2>
      `;
    }
}

window.customElements.define("phone-component", PhoneComponent);
