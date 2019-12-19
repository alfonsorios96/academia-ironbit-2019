import { html, LitElement } from 'lit-element';
import style from './contact-card-styles.js';
import '@polymer/paper-card';

class ContactCard extends LitElement {
  static get properties() {
    return {
      contact: Object
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.contact = {};
  }

  render() {
    return html`
        <paper-card heading="${this.contact.name}" image="${this.contact.image}" alt="Emmental">
          <div class="card-content">
            <ul>
              <li>${this.contact.lastName}</li>
              <li>${this.contact.phone}</li>
              <li>${this.contact.gender}</li>
              <li>${this.contact.address}</li>
              <li>${this.contact.email}</li>
              <li>${this.contact.nss}</li>
              <li>${this.contact.rfc}</li>
              <li>${this.contact.bloodType}</li>
              <li>${this.contact.curp}</li>
            </ul>
          </div>

        </paper-card>
        `
    }
}

window.customElements.define("contact-card", ContactCard);
