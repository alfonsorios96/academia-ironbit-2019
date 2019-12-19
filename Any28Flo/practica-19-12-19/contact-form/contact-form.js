import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';

import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

class ContactForm extends LitElement {
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
      <vaadin-combo-box label="User" .items="${this.gendersCatalog}"></vaadin-combo-box>

    </div>
      `;
    }
    saveContac(){
      const lastName = this.shadowRoot.querySelector("#name");

      c
      this.dispatchEvent(new CustomEvent ('register-contact-request'),{
        detail :{
          lastName = lastName.valued
        }
      })
    }
    
}

window.customElements.define("contact-form", ContactForm);
