import {LitElement, html, css} from 'lit-element';

import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';

export class IBLogin extends LitElement {
    constructor() {
        super();
        this.logo = "";
        this.username = "Fernando";
        this.password = "1234";
    }

    static get styles() {
        return css`
            .container {
                width: 350px;
                margin-left: auto;
                margin-right: auto;
                font-family: 'Montserrat', sans-serif;
            }

            .card-actions {
                display: flex;
                flex-direction: column;
            }
        `;
    }

    static get properties() {
        return {
            logo: String,
            usename: String,
            password: String
        }
    }

    render() {
        return html`
        <div class="container">
            <paper-card image="https://avatars3.githubusercontent.com/u/29693607?s=460&v=4" alt="Emmental">
                <div class="card-content">
                    <h1>Fernando Jimenez</h1>
                </div>
                <div class="card-actions">
                    <vaadin-text-field label="Username"></vaadin-text-field>
                    <vaadin-password-field label="Password"></vaadin-password-field>
                    <vaadin-button theme="primary">Login</vaadin-button>
                </div>
            </paper-card>
        </div>
        `;
    }
}

window.customElements.define('ib-login', IBLogin);