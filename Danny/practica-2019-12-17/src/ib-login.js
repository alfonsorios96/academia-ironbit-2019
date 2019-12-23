// Importando usando ES Modules:
import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-password-field';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/paper-card';

// Creando la clase de mi elemento :
export class IbLogin extends LitElement {
    constructor() {
        super();
        this.username = '';
        this.password = '';
        this.logo = '';

    }

    static get properties() {
        return {
            username: String,
            password: String,
            logo: String
        }
    }
    static get styles() {
        return css`
            h1{
                color: red;
            }
            .container, .fields-form{
               display: flex;
               justify-content: center;
               align-items: center;
               flex-direction: column;
            }
            .login {
                
            }
            paper-card {
                width: 300px;
            }
        `;
    }
    //checkFormat 
    // Construccion de la plantilla
    render(){
        
        return html`
        
        <div class="container">
            <div class="login">
                <paper-card heading="" image="${this.logo}" alt="Emmental">
                    <div class="fields-form" >
                        <vaadin-text-field placeholder="Elena Torres" label = "Username" value =  "${this.username}" > </vaadin-text-field>
                        <vaadin-password-field placeholder="Contraseña"  label = "Password" value =  "${this.password}"></vaadin-password-field>
                        <vaadin-button theme="primary">Ingresar</vaadin-button>
                    </div>
                </paper-card>
            </div>
        </div>
        `;
        
    }
}


window.customElements.define('ib-login', IbLogin);