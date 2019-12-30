import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';


class HomePage extends PageDM {
  static get styles() {
      return css`
        .principal-container > *{
          max-width: 600px;
          margin-left:auto;
          margin-right: auto;
        }
      `;
    }
    render() {
      return html`
      
    `;
    }
}

window.customElements.define('home-page', HomePage);
