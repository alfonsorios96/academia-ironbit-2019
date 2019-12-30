import { html, LitElement } from 'lit-element';
import style from './element-form-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-number-field';
import '@vaadin/vaadin-button/vaadin-button';
import '@polymer/paper-card';

class ElementForm extends LitElement {

  static get styles() {
    return style;
  }

  sendInfo(){
    const fields = this.shadowRoot.querySelectorAll('.fields');
    let details = {};

    for(const field of fields){
      details[field.id] = field.value;
    }

    this.dispatchEvent(new CustomEvent('sent-info', {detail : details}))
  }

  render() {
    return html`
      <paper-card>
        <vaadin-text-field class="fields" id="name" label="Nombre"></vaadin-text-field>
        <vaadin-text-field class="fields" id="description" label="Descripción"></vaadin-text-field>
        <vaadin-number-field class="fields" id="price" label="Precio"></vaadin-number-field>

        <vaadin-button @click="${this.sendInfo}" theme="success primary">Guardar</vaadin-button>
      </paper-card>
      `;
    }
}

window.customElements.define("element-form", ElementForm);
