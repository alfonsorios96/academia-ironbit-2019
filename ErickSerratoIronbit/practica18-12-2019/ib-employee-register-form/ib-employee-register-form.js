import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

class IbEmployeeRegisterForm extends LitElement {
  static get properties() {
    return {
      hello: { type: String },
      tittle: {type: String }
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
    <div id="conteiner">
      <paper-card >
        <div class="card-content">
          <div id = "tittle">
            <p>${this.tittle}</p>   
          </div>
        </div>
        <div class="card-actions">
        <div id ="form1" >
          <vaadin-text-field id="numberofemployee" label="Número de empleado"></vaadin-text-field>
          <vaadin-text-field id ="nameemployee"  label="Nombre(s)"></vaadin-text-field>
          <vaadin-text-field id ="firstname" label="Apellido Paterno"></vaadin-text-field>
          <vaadin-text-field id ="lastname" label="Apellido Materno"></vaadin-text-field>
        </div>
        <div id = "form2">
          <vaadin-date-picker id="datestar" label="Fecha de ingreso" placeholder="Fecha de ingreso">
          </vaadin-date-picker>
          <vaadin-select     id="escheme"  label="Esquema"   placeholder ="Seleccione">
            <template>
                <vaadin-list-box>
                  <vaadin-item value ="Option One">Option one</vaadin-item>
                  <vaadin-item value ="Option Two">Option two</vaadin-item>
                </vaadin-list-box>
              </template>
           </vaadin-select>
        </div>
        <div id ="form22">
          <vaadin-select   id="bildingcompany" label="Empresa Facturadora" placeholder="Seleccione">
            <template>
              <vaadin-list-box>
                <vaadin-item value="Option One" >Option one</vaadin-item>
                <vaadin-item value="Option Two">Option two</vaadin-item>
              </vaadin-list-box>
            </template>
          </vaadin-select>

          <vaadin-select  id ="status" label="Estatus" placeholder="Seleccione">
          <template>
            <vaadin-list-box>
              <vaadin-item value ="Option One">Option one</vaadin-item>
              <vaadin-item value ="Option Two">Option two</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>

        </div>

        <div id = "form3">
          <vaadin-select id="bussinesname" label="Razón Social" placeholder="Seleccione">
            <template>
              <vaadin-list-box>
                <vaadin-item value="Option One">Option one</vaadin-item>
                <vaadin-item value= "Option One">Option two</vaadin-item>
              </vaadin-list-box>
            </template>
          </vaadin-select>  
        </div>
        <div id="button">
          <vaadin-button theme="primary" @click="${this.registerEmployeeRequest}" >Agregar</vaadin-button>
        </div>
        </div>
      </paper-card>
    </div>    
      `;
    }

    registerEmployeeRequest (){
      const employeeNumberNode = this._getNode('#numberofemployee');
      const employeeNameNode = this._getNode('#nameemployee');
      const employeeFirtnameNode = this._getNode('#firstname');
      const employeeLastnameNode =  this._getNode('#lastname');
      const employeeDateStarNode = this._getNode("#datestar");
      const employeeSchemeNode =  this._getNode('#escheme');
      const employeeBildingCompanyNode = this._getNode("#bildingcompany");
      const employeeStatusNode = this._getNode("#status");
      const employeeBussinesNameNode =  this._getNode('#bussinesname');

      const superEmployee = {
        number : employeeNumberNode.value,
        name : employeeNameNode.value,
        firstName : employeeFirtnameNode.value,
        lastName : employeeLastnameNode.value,
        dateStar : employeeDateStarNode.value,
        scheme : employeeSchemeNode.value,
        bildingCompany : employeeBildingCompanyNode.value,
        status: employeeStatusNode.value,
        bussinesName: employeeBussinesNameNode.value   
      };

      this.dispatchEvent(new CustomEvent('register-employee-request', {
        detail: superEmployee
      }));

      employeeNumberNode.value = '';
      employeeNameNode.value = '';
      employeeFirtnameNode.value = '';
      employeeLastnameNode.value = '';
      employeeDateStarNode.value = '';
      employeeSchemeNode.value = 'Seleccione';
      employeeBildingCompanyNode.value = 'Seleccione';
      employeeStatusNode.value = 'Seleccione';
      employeeBussinesNameNode.value = 'Seleccione';
    
    }
    _getNode(query) {
      return this.shadowRoot.querySelector(query);
    }
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
