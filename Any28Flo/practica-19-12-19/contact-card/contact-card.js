import { html, LitElement } from 'lit-element';
import style from './contact-card-styles.js';
import '@polymer/paper-card/paper-card.js';

class ContactCard extends LitElement {
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
    <custom-style>
      <style>
        paper-card{
          width:100;
        }
      </style>
    </custom-style>
  xx   <paper-card heading="Emmental" image="https://placekitten.com/200/300" alt="Emmental">
      <div class="card-content">
        <ol>
          <li>${this.contact.name}</li>
          <li>${this.contact.lastName}</li>
          <li>${this.contact.phone}</li>
          <li>${this.contact.gender}</li>
          <li>${this.contact.addres}</li>
          <li>${this.contact.email}</li>
          <li>${this.contact.nss}</li>
          <li>${this.contact.bloodType}</li>
          <li>${this.contact.curp}</li>
          ${this.contact.skills.map(skill => html ` <span>${skill}</span>`)}
          
        </ol>
    </div>
      <div class="card-actions">
        <button>Share</button>
        <button>Explore!</button>
      </div>
    </paper-card>
      `;
    }
}

window.customElements.define("contact-card", ContactCard);
