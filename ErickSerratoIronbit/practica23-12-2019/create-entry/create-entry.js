import { html, LitElement } from 'lit-element';
import style from './create-entry-styles.js';

class CreateEntry extends LitElement {
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
    <div>
      <label for ="title"> Tittle: </label>
      <input id = "title" type ="text" placeholder = "Tittle">
      <label for ="autor"> Autor: </label>
      <input id ="autor" type ="text" placeholder = "Autor">
      <label for = "info">Info: </label>
      <input id ="info" type ="text" placeholder = "Info">
      <button @click="${this.sendartice}" > Send </button>
    </div>

      `;
    }

    sendartice (){
      const  titleNode = this._getNode('#title');
      const  autorNode = this._getNode('#autor');
      const  infoNode = this._getNode('#info');

      const superartice ={
        title : titleNode.value,
        autor : autorNode.value,
        info : infoNode.value

      }

      titleNode.value = '';
      autorNode.value = '';
      infoNode.value = '';

      this.dispatchEvent(new CustomEvent('create-entry',{
        detail:superartice
      }));

    }

    _getNode(query) {
      return this.shadowRoot.querySelector(query);
    }
}

window.customElements.define("create-entry", CreateEntry);
