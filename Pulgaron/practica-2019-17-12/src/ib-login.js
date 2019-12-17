import {LitElement, html, css} from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@polymer/paper-card';

class IbLogin extends LitElement{
    static get properties(){
        return{
            username: String,
            password: String,
            logo: String
        }
    }

    static get styles(){
        return css `
            paper-card{
                padding: 10px;
                text-align: center;
            }
            vaadin-button{
                margin-top: 20px;
            }
        `
    }

    constructor(){
        super();
        this.username = '';
        this.password = '';
        this.logo = '';
    }
    

    render(){
        return html`
        
            <paper-card>
            <img src="${this.logo}">
                <div class="card-content">
                    
                   <vaadin-text-field placeholder="Elena Torres"></vaadin-text-field>
                   <br>
                   <vaadin-text-field placeholder="*****"></vaadin-text-field>
                   <br>
                   <vaadin-button>Login</vaadin-button>
                </div>
            </paper-card>
        `;
    }
}

customElements.define('ib-login', IbLogin);