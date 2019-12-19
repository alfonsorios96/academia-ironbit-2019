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
        bloodTypeCatalog: Array


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

    this.bloodTypeCatalog = [
      {
        label: '-O',
        value: '-O'
      },
      {
        label: '+O',
        value: '+O'
      },
      {
        label: '-A',
        value: '-A'
      },
      {
        label: '+A',
        value: '+A'
      },
    ]
  }

  render() {
    return html`

          <vaadin-text-field id="name"></vaadin-text-field>
          <vaadin-text-field id="lastName"></vaadin-text-field>
          <vaadin-combo-box id="gender" .items="${this.gendersCatalog}" placeholder="Sexo" label="Sexo"> </vaadin-combo-box>
          <vaadin-text-field id="nss"></vaadin-text-field>
          <vaadin-combo-box id="bloodType" .items="${this.bloodTypeCatalog}"></vaadin-combo-box>
          <vaadin-text-field id="phone"></vaadin-text-field>
          <vaadin-text-field id="address"></vaadin-text-field>
          <vaadin-text-field id="email"></vaadin-text-field>
          <vaadin-text-field id="curp"></vaadin-text-field>
          <vaadin-text-field id="rfc"></vaadin-text-field>
          <vaadin-button @click="${this.addSkill}">Nueva habiilidad</vaadin-button>
          <div class="container skills" id="skillsContainer">

          </div>
          <vaadin-button @click="${this.saveContact()}"></vaadin-button>


      `;
    }

    addSkill(){
    const container = this.shadowRoot.querySelector('#skillsContainer');
    container.innerHTML += `<vaadin-text-field class="skill"></vaadin-text-field>`
    }

    saveContact(){
      const name = this.shadowRoot.querySelector('#name');
      const lastName = this.shadowRoot.querySelector('#lastName');
      const gender = this.shadowRoot.querySelector('#gender');
      const nss = this.shadowRoot.querySelector('#nss');
      const bloodType = this.shadowRoot.querySelector('#bloodType');
      const phone = this.shadowRoot.querySelector('#phone');
      const address = this.shadowRoot.querySelector('#address');
      const email = this.shadowRoot.querySelector('#email');
      const curp = this.shadowRoot.querySelector('#curp');
      const rfc = this.shadowRoot.querySelector('#rfc');

      const skills = this.shadowRoot.querySelectorAll('.skill');
      const newSkills = [];
      for(const skill of  skills){
        newSkills.push(skill.value);
        skill.parentNode.removeChild(skill);
      }

      this.dispatchEvent(new CustomEvent('register-contact-request',{
        detail: {
          name: name.value,
          lastName: lastName.value,
          gender: gender.value,
          nss: nss.value,
          bloodType: bloodType.value,
          phone: phone.value,
          address: address.value,
          email: email.value,
          curp: curp.value,
          rfc: rfc.value,
          skills: newSkills.value
        }
      }))

    }
}

window.customElements.define("contact-form", ContactForm);
