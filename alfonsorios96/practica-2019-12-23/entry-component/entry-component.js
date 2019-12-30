import { html, LitElement } from 'lit-element';
import style from './entry-component-styles.js';

class EntryComponent extends LitElement {
  static get properties() {
    return {
      article : {
        type: Object,
        attribute: 'body-of-article'}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.article = {
      date: '',
      title: '',
      body: '',
      author: ''
    };
  }

  render() {
    return html`
        <div>
          <p>${this.article.date}</p><h2>${this.article.title}</h2>
          <h4>${this.article.body}</h4>
          <p>${this.article.author}</p>
        </div>
      `;
    }
}

window.customElements.define("entry-component", EntryComponent);
