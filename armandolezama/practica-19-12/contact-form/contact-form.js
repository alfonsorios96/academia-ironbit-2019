import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';
import '@vaadin/vaadin-button/vaadin-button'
import '@vaadin/vaadin-combo-box/vaadin-combo-box'
import '@vaadin/vaadin-text-field/vaadin-text-field'
class ContactForm extends LitElement {
  static get properties() {
    return {
      gender: Array,
      bloodType: Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.genderCatalog = [
      {
        label: 'Masculino',
        value: 'M'
      },
      {
        label: 'Femenino',
        value: 'F'
      }
    ]
    this.bloodType = [
      {

      },{

      }
    ]
  }

  addSkill(){
    const container = this.shadowRoot.querySelector('#skills-container')
    container.insertAdjacentElement()
  }

  render() {
    return html`
      <div class="container">
      <vaadin-text-field id="name" placeholder="Nombre" label="Nombre"></vaadin-text-field>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-combo-box .items="${this.genderCatalog}" placeholder="Sexo" label="Sexo"></vaadin-combo-box>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-combo-box .items="${this.genderCatalog}" placeholder="Sexo" label="Sexo"></vaadin-combo-box>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-text-field id="last-name" placeholder="Apellido" label="Apellido"></vaadin-text-field>
      <vaadin-button>Nueva habilidad</vaadin-button>

      </div>

      <div id="skills-container" class="container">

      </div>
      `;
    }
}

window.customElements.define("contact-form", ContactForm);
