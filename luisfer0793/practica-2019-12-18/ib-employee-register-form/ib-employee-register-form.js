import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-button/vaadin-button.js';

class IbEmployeeRegisterForm extends LitElement {
    static get styles() {
        return style;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Registro de Empleados</h1>
            <div class="fields">
                <vaadin-number-field id="numberField" label="Numero de Empleado"></vaadin-number-field>
                <vaadin-text-field id="nameField" label="Nombre (s)"></vaadin-text-field>
                <vaadin-text-field id="surnameField" label="Apellido Paterno"></vaadin-text-field>
                <vaadin-text-field id="lastnameField" label="Apellido Materno"></vaadin-text-field>
                <vaadin-date-picker id="dateField" label="Fecha de Ingreso"></vaadin-date-picker>
                <vaadin-select id="billingCompanyField" label="Empresa Facturadora"></vaadin-select>
                <vaadin-select id="schemaField" label="Esquema"></vaadin-select>
                <vaadin-select id="statusField" label="Estatus"></vaadin-select>
                <vaadin-select id="rsField" label="Razón Social"></vaadin-select>
            </div>
            <vaadin-button theme="primary" @click="${this.register}">Agregar</vaadin-button>
        `;
    }

    register() {
        const [numberField,
             nameField,
             surnameField,
             lastnameField,
             dateField,
             billingCompanyField,
             schemaField,
             statusField,
             rsField] = this.shadowRoot.querySelectorAll('[id]');
        this.dispatchEvent(new CustomEvent('employee-register-request', {
            detail: {
                nEmployee: numberField.value,
                name: nameField.value,
                surname: surnameField.value,
                lastname: lastnameField.value,
                date: dateField.value,
                billingCompany: billingCompanyField.value,
                schema: schemaField.value,
                status: statusField.value,
                rs: rsField.value
            }
        }));
    }
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);