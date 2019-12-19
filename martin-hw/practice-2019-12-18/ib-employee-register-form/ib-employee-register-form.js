import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-button/vaadin-button.js';



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
    this.everything = [];
    this.info = '';
  }

  render() {
    return html`
        <div class="parentDiv">
          <h2>Registro de Empleados</h2>
          <div>Numero de Empleado: 
            <vaadin-text-field value= "${this.info}" @change="${this.updateTask}">
            </vaadin-text-field>
          </div>
          <div>Nombre(s): 
            <vaadin-text-field value= "${this.info}" @change="${this.updateTask}">
            </vaadin-text-field>
          </div>
          <div>Apellido Paterno: 
            <vaadin-text-field value= "${this.info}" @change="${this.updateTask}">
            </vaadin-text-field>
          </div>
          <div>Apellido Materno: 
            <vaadin-text-field value= "${this.info}" @change="${this.updateTask}">
            </vaadin-text-field>
          </div>
          <div>
              Fecha de ingreso: 
                <vaadin-date-picker value= "${this.info}" @change="${this.updateTask}">
                </vaadin-date-picker>
              Esquema: 
                <vaadin-select value= "${this.info}" @change="${this.updateTask}">
                </vaadin-select>
              Empresa Facturadora: 
                <vaadin-select value= "${this.info}" @change="${this.updateTask}">
                </vaadin-select>
              Estatus: 
                <vaadin-select value= "${this.info}" @change="${this.updateTask}">
                </vaadin-select>
          </div>
          <div>Razon Social: 
            <vaadin-select value= "${this.info}">
            </vaadin-select>
          </div>
          <vaadin-button theme="primary" @click="${this.addEverything}">
              Agregar
          </vaadin-button>
        </div>
      `;
    }

    updateTask(e){
      this.task = e.target.value;
    }

    addEverything() {
      if (this.task) {
        this.everything = [...this.everything, { 
            task: this.task,
            complete: false
        }];
        this.task = ''; 
      }
    }

   

    updateTask(e) {
      this.task = e.target.value; 
    }
    
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
