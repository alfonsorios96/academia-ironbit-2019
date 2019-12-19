import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-form-layout';
import '@polymer/paper-dialog/paper-dialog.js';

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
			<paper-dialog id="dialog">
				<vaadin-text-field id="idEmployee" label="Numero de empleado:"></vaadin-text-field>
				<vaadin-text-field id="names" label="Nombre(s)"></vaadin-text-field>
				<vaadin-text-field id="firstLastName" label="Apellido paterno"></vaadin-text-field>
				<vaadin-text-field id="secondLastName" label="Apellido materno"></vaadin-text-field>
				<vaadin-date-picker id="date" label="Fecha de ingreso" value="2019-12-01"></vaadin-date-picker>
				<vaadin-select id="schema" label="Esquema">
					<template>
						<vaadin-list-box>
							<vaadin-item value="mixto">Mixto</vaadin-item>
							<vaadin-item value="nomina">Nomina</vaadin-item>
							<vaadin-item value="honorarios">Honorarios</vaadin-item	>
						</vaadin-list-box>
					</template>
				</vaadin-select>
				<vaadin-select id="billingCompany" label="Empresa facturadora">
				<template>
						<vaadin-list-box>
							<vaadin-item value="mixto">Mixto</vaadin-item>
							<vaadin-item value="nomina">Nomina</vaadin-item>
							<vaadin-item value="honorarios">Honorarios</vaadin-item	>
						</vaadin-list-box>
					</template>
				</vaadin-select>
				<vaadin-select id="status" label="Estatus">
				<template>
						<vaadin-list-box>
							<vaadin-item value="mixto">Mixto</vaadin-item>
							<vaadin-item value="nomina">Nomina</vaadin-item>
							<vaadin-item value="honorarios">Honorarios</vaadin-item	>
						</vaadin-list-box>
					</template>
				</vaadin-select>
				<vaadin-select id="businessName" label="Razón Social">
				<template>
						<vaadin-list-box>
							<vaadin-item value="mixto">Mixto</vaadin-item>
							<vaadin-item value="nomina">Nomina</vaadin-item>
							<vaadin-item value="honorarios">Honorarios</vaadin-item	>
						</vaadin-list-box>
					</template>
				</vaadin-select>
				<vaadin-button @click="${this.loginRequest}">Enviar</vaadin-button>
			</paper-dialog>
				<vaadin-button @click="${this.open}">Abrir</vaadin-button>
		</div>
      `;
	}
	
	open() {
		this.shadowRoot.querySelector('#dialog').toggle();
	}

	loginRequest(){
		const id = this._getNode('#idEmployee');
		const names = this._getNode('#names');
		const firstLast = this._getNode('#firstLastName');
		const secondLast = this._getNode('#secondLastName');
		const date = this._getNode('#date');
		const schema = this._getNode('#schema');
		const billingCompany = this._getNode('#billingCompany');
		const status = this._getNode('#status');
		const businessName = this._getNode('#businessName');

		const user = {
			id: id.value,
			names: names.value,
			firstLast: firstLast.value,
			secondLast: secondLast.value,
			date: date.value,
			schema: schema.value,
			billingCompany: billingCompany.value,
			status: status.value,
			businessName: businessName.value
		}

		this.dispatchEvent(new CustomEvent('employee-register-request', {
			detail: user
		}));

		id.value = '';
		names.value = '';
		firstLast.value = '';
		secondLast.value = '';

	}

	_getNode(query){
		return this.shadowRoot.querySelector(query);
	}
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
