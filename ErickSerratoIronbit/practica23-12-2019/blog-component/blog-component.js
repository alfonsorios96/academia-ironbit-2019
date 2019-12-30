import { html, LitElement } from 'lit-element';
import style from './blog-component-styles.js';
import '@catsys/create-entry/create-entry.js';
import '@catsys/entry-component/entry-component.js';

class BlogComponent extends LitElement {
  static get properties() {
    return {
      blogList : Array

    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.blogList =  []

  }

  render() {
    return html`
    <div id="conteiner">
      <div id="headblog">
        <create-entry @create-entry="${this.inserArticule}"></create-entry>
      </div>
      <div id="bodyblog">
        <h2> Blog </h2>
        ${this.blogList.map(entry => html ` <entry-component .article="${entry}"></entry-component> `)}
      </div>
    </div>
      `;
    }

    inserArticule(event){
      this.blogList = [...this.blogList, {
        ...event.detail,
        body:event.detail.info,
        author:event.detail.autor
      }];


    }
}

window.customElements.define("blog-component", BlogComponent);
