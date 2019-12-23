import { html, LitElement, css } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-text-field/vaadin-number-field';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-date-picker/vaadin-date-picker-light';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import '@vaadin/vaadin-button/vaadin-button';


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
    this.hello = '';
  }
  

  render() {
    return html`
    <div class="container-form">
        <form>
          <fieldset>
            <div class="list-form">
              <legend>Registro de Empleados</legend>
                  <div >
                      <label>Numero de Empleado:  </label><vaadin-number-field ></vaadin-number-field>
                  </div>
                  <div class="field">
                        <label>Nombre(s):  </label><vaadin-text-field ></vaadin-text-field>
                  </div>
                  <div class="field">
                      <label>Apellido Paterno  </label><vaadin-text-field ></vaadin-text-field>
                  </div>
                  <div class="field">
                      <label>Apellido Materno  </label><vaadin-text-field ></vaadin-text-field>
                  </div>
                  <div class="field">
                    <div class="two-fields">
                        <label>Fecha de Ingreso  </label>
                        <vaadin-date-picker label="" placeholder="Pick a date">
                        </vaadin-date-picker>
                          <div class="lit-field">
                              <label>Eschema</label>
                              <vaadin-select placeholder="">
                                <template>
                                  <vaadin-list-box>
                                    <vaadin-item>Option one</vaadin-item>
                                    <vaadin-item>Option two</vaadin-item>
                                  </vaadin-list-box>
                                </template>
                              </vaadin-select>
                          </div>
                    </div>
                  </div>
                  <div class="field">
                      <div class="two-fields">
                          <label>Empresa Facturadora:  </label>
                          <vaadin-select placeholder="">
                                <template>
                                  <vaadin-list-box>
                                    <vaadin-item>Option one</vaadin-item>
                                    <vaadin-item>Option two</vaadin-item>
                                  </vaadin-list-box>
                                </template>
                              </vaadin-select>
                          <div class="lit-field">
                              <label>Estatus  </label>
                              <vaadin-select placeholder="">
                                <template>
                                  <vaadin-list-box>
                                    <vaadin-item>Option one</vaadin-item>
                                    <vaadin-item>Option two</vaadin-item>
                                  </vaadin-list-box>
                                </template>
                              </vaadin-select>
                          </div>
                      </div>
                  </div>
                  <div class="field">
                  <label>Rezon social  </label><vaadin-text-field label=""></vaadin-text-field>
                </div><!--Fin de list form-->  
                <div class="buttonA">
                    <vaadin-button>Agregar</vaadin-button>   
                </div>
            </div>
          </fieldset>
        </form>
      </div>
      `;
    }
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
