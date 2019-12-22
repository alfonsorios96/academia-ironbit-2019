import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';
import '@vaadin/vaadin-button';
import  '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-select';
import  '@vaadin/vaadin-text-field';

class ContactForm extends LitElement {
  static get properties() {
    return {
      gendersCatalog: Array,


    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.gendersCatalog = [
      {
        label: 'Masculino',
        value: 'M'
      },
      {
        label: 'Femenino',
        value: 'F'
      }
    ]
  }

  render() {
    return html`
        <vaadin-text-field id="sprite" placeholder="Sprite" label="Sprite"></vaadin-text-field>
        <vaadin-text-field id="id" placeholder="Id" label="Id"></vaadin-text-field>
        <vaadin-text-field id="name" placeholder="Nombre" label="Nombre"></vaadin-text-field>
        <vaadin-combo-box id="gender" .items="${this.gendersCatalog}" placeholder="Sexo" label="Sexo"> </vaadin-combo-box>
        <vaadin-text-field id="experience" placeholder="Experiencia" label="Experiencia"></vaadin-text-field>
        <vaadin-text-field id="height" placeholder="Altura" label="Altura"></vaadin-text-field>
        <vaadin-text-field id="weight" placeholder="Peso" label="Peso"></vaadin-text-field>

          <vaadin-button @click="${this.savePokemon}">Salvar</vaadin-button>
      `;
    }

    savePokemon(){
      const sprite = this.shadowRoot.querySelector('#sprite');
      const id = this.shadowRoot.querySelector('#id');
      const name = this.shadowRoot.querySelector('#name');
      const gender = this.shadowRoot.querySelector('#gender');
      const experience = this.shadowRoot.querySelector('#experience');
      const height = this.shadowRoot.querySelector('#height');
      const weight = this.shadowRoot.querySelector('#weight');

      this.dispatchEvent(new CustomEvent('register-pokemon-request',{
        detail: {
          sprite: sprite.value,
          id: id.value,
          name: name.value,
          gender: gender.value,
          experience: experience.value,
          height: height.value,
          weight: weight.value
        }
      }))

    }
}

window.customElements.define("contact-form", ContactForm);
