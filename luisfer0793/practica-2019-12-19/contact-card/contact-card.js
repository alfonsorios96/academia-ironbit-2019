import { html, LitElement, css } from 'lit-element';
import style from './contact-card-styles.js';
import '@polymer/paper-card/paper-card.js';
// import '@polymer/paper-button/paper-button.js';

class ContactCard extends LitElement {
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
    
    render() {
        return html`
            <paper-card image="${this.contact.image}">
                <div class="card-content">
                    <p>${this.contact.name} ${this.contact.lastName}</p>
                    <p>${this.contact.gender}</p>
                    <p>${this.contact.curp}</p>
                    <p>${this.contact.name}</p>
                </div>
            </paper-card>
        `;
    }
}

window.customElements.define("contact-card", ContactCard);
