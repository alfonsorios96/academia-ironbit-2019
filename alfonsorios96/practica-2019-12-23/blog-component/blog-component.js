import { html, LitElement } from 'lit-element';
import style from './blog-component-styles.js';
import '@catsys/create-entry';
import '@catsys/entry-component';

class BlogComponent extends LitElement {
  static get properties() {
    return {
      blogList: Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.blogList = [];
  }

  render() {
    return html`
      <div class="container">
          <div class="create-entry">
            <create-entry @send-entry-data="${this.insertArticle}"></create-entry>
          </div>
          <h2> Blog </h2> 
          <div class="blog-list">
            ${this.blogList.map(entry => html`<entry-component .article="${entry}"></entry-component>`)}
          </div>
      </div>
      `;
    }
    insertArticle(event){
      this.blogList = [...this.blogList, {
        ...event.detail,
        body:event.detail.info
      }]; 
    }
}

window.customElements.define("blog-component", BlogComponent);
