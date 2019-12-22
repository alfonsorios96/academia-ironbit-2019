import {html, css} from 'lit-element';

import {PageDM} from '../utils/page-dm.js';

class DefaultPage extends PageDM {
    static get properties() {
        return {
            pokemon: Object
        };
    }
    
    constructor(){
        super();
        this.pokemon = {}
    }
    static get styles() {
        return css`
        .principal-container > *{
          max-width: 600px;
          margin-left:auto;
          margin-right: auto;
        }
      `;
    }
    
    firstUpdated() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
            .then(response => response.json())
            .then(data => {
                this.pokemon = data;
            });
    }
    
    render() {
        return html`

      `;
    }
    
    
}

window.customElements.define('default-page', DefaultPage);
