import { html, LitElement } from 'lit-element';
import style from './contact-card-styles.js';

class ContactCard extends LitElement {
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
        <custom-style>
          <style>
            paper-card {
              --paper-card-header-image {
                width: 600px;
                heigth: 600px;
              }
            }
          </style>
        </custom-style>
        <paper-card heading="${this.contact.name}" image="${this.contact.image}" alt="${this.contact.name}">
          <div class="card-content">
              <ul>
                <li>Nombre </li>
                <li>Teléfono</li>
                <li>Sexo</li>
                <li>Direccion</li>
                <li>Correo</li>
                <li>NSS</li>
                <li>RFC</li>
                <li>Tipo sanguíneo</li>
                <li>Curp</li>
                  <ul>
                    ${this.contact.skills.map()}
                  </ul>
              </ul>
          </div>
          <button type="">Share</button>
          <button type="">Explore</button>
        </paper-card>
        
      `;
    }
}

window.customElements.define("contact-card", ContactCard);
