import { html, LitElement } from 'lit-element';
import style from './ib-employe-register-form-styles.js';

import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';


class IbEmployeRegisterForm extends LitElement {
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
      <vaadin-number-field id="numEmploye" label="Número de empleado: "></vaadin-number-field><br>
      <vaadin-text-field id="nameEmploye" label="Nombre(s):"></vaadin-text-field><br>
      <vaadin-text-field id="firstName" label="Apellido paterno:"></vaadin-text-field><br>
      <vaadin-text-field id="secondName" label="Apellido materno:"></vaadin-text-field><br>
      <vaadin-date-picker id="admisionDate" label="Fecha de ingreso"></vaadin-date-picker>
      <vaadin-select label = "Esquema">
        <template id="payment">
          <vaadin-list-box>
            <vaadin-item>Esquema 1</vaadin-item>
            <vaadin-item>Esquema 2</vaadin-item>
            <vaadin-item>Esquema 3</vaadin-item>
          </vaadin-list-box>
        </template>
      </vaadin-select><br>
      <vaadin-select label = "Empresa Facturadora">
        <template id="billingCompany">
          <vaadin-list-box>
            <vaadin-item>Company 1</vaadin-item>
            <vaadin-item>company 2</vaadin-item>
            <vaadin-item>Company 3</vaadin-item>
          </vaadin-list-box>
        </template>
      </vaadin-select>
      <vaadin-select label = "Estatus">
        <template id="employeStatus">
          <vaadin-list-box>
            <vaadin-item>Activo</vaadin-item>
            <vaadin-item>Inactivo</vaadin-item>
          </vaadin-list-box>
        </template>
      </vaadin-select><br>
      <vaadin-select label = "Razon Social:">
        <template id="businessName">
          <vaadin-list-box>
            <vaadin-item>FOGE921128</vaadin-item>
            <vaadin-item>FOGE921129</vaadin-item>
          </vaadin-list-box>
        </template>
      </vaadin-select><iron-icon icon="vaadin:plus-circle"></iron-icon><br>
      <vaadin-button theme="primary" @click="${this.handleClick}" >Agregar</vaadin-button>
      `;
    }
    handleClick(e) {
      const numEmployeNode = this._getNode('#numEmploye');
      const nameEmployeNode = this._getNode("#nameEmploye"); 
      const firstNameNode = this._getNode("#firstName");
      const secondNameNode = this._getNode("#secondName");
      const admisionDateNode = this._getNode("#admisionDate");

      const newEmploye = {
        numEmploye : numEmployeNode.value,
        nameEmploye : nameEmployeNode.value,
        firstName : firstNameNode.value,
        secondName : secondNameNode.value,
        admisionDate : admisionDateNode.value 

      }
    }
    _getNode(query){
      return this.shadowRoot.querySelector(query);
    
    }
}

window.customElements.define("ib-employe-register-form", IbEmployeRegisterForm);
