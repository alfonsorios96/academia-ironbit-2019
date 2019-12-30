import { html, LitElement } from 'lit-element';
import style from './element-layout-styles.js';
import '@vaadin/vaadin-button/vaadin-button';

class ElementLayout extends LitElement {
  static get properties() {
    return {
      id: {type: String},
      name: { type: String },
      description: {type: String},
      price: {type: Number},
      rate: {type: Number},
      comments: {type: Array}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.description = '';
    this.price = 0;
    this.rate = 0;
    this.comments = [];
  }

  edit(){
    this.dispatchEvent(new Event('edit-data'));
  };

  delete(){
    this.dispatchEvent(new Event('delete-data'));
  };

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>Nombre: </h2> <h2>${this.name}</h2>
        <h3>Precio: </h3> <p>${this.price}</p>
        <h3>Descripción: </h3> <p>${this.description}</p>
        <h3>Calificación: </h3> <p>${this.rate}</p>
        <h3>Commentarios: </h3> <p>${this.comments}</p>
        <!--Work with comments using arrays, iterate and print message -->
        <vaadin-button @click="${this.edit}" theme="primary">Editar</vaadin-button>
        <vaadin-button @click="${this.delete}" theme="error primary">Eliminar</vaadin-button>
      `;
    }
}

window.customElements.define("element-layout", ElementLayout);
