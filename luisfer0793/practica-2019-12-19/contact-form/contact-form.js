import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';

class ContactForm extends LitElement {
  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} contact-form</h2>
      `;
    }
}

window.customElements.define("contact-form", ContactForm);
