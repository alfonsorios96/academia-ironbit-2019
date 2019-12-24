import { html, LitElement } from 'lit-element';
import style from './create-entry-styles.js';

class CreateEntry extends LitElement {
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

  send() {
    const [titleInput, authorInput, infoInput] = this.shadowRoot.querySelectorAll('input');
    const properties = {
      title: titleInput.value,
      author: authorInput.value,
      info: infoInput.value
    }
    titleInput.value = '';
    authorInput.value = '';
    infoInput.value = '';
    this.dispatchEvent(new CustomEvent('send-entry-data', {
      detail: properties
    }));
  }

  render() {
    return html`
        <div>
        <label for="title">Title :</label>
         <input  id="title" type="text" placeholder="title">
         <label for="author">Author :</label>
          <input id="author" type="text" placeholder="author">
         <label for="info">Info :</label>
          <input  id="info" type="text" placeholder="info">
          <button @click="${this.send}">Send</button> 
        </div>
      `;
    }
}

window.customElements.define("create-entry", CreateEntry);
