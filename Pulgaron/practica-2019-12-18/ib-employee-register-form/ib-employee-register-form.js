import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-form-layout';

class IbEmployeeRegisterForm extends LitElement {
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
        <div>
			<vaadin-dialog>
				<template>
					<form id="form">
						<vaadin-text-field label="Numero de empleado:"></vaadin-text-field>
						<vaadin-text-field label="Nombre(s)"></vaadin-text-field>
						<vaadin-text-field label="Apellido paterno"></vaadin-text-field>
						<vaadin-text-field label="Apellido materno"></vaadin-text-field>
						<vaadin-date-picker label="Fecha de ingreso" value="2019-12-01"></vaadin-date-picker>
						<vaadin-select label="Esquema"></vaadin-select>
						<vaadin-select label="Empresa facturadora"></vaadin-select>
						<vaadin-select label="Estatus"></vaadin-select>
						<vaadin-select label="Razón Social"></vaadin-select>
						<vaadin-button>Enviar</vaadin-button>
					</form>
				</template>
			</vaadin-dialog>
			<vaadin-button @click="${this.open}">Abrir</vaadin-button>
		</div>
      `;
	}
	
	open() {
		this.shadowRoot.querySelector('vaadin-dialog').opened = true;
	}
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
