import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';

class ContactForm extends LitElement {
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
        <h2>${this.hello} contact-form</h2>
      `;
    }
}

window.customElements.define("contact-form", ContactForm);
