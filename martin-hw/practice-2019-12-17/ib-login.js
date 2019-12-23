import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-card/paper-card.js'
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';


export class IbLogin extends LitElement {
    constructor(){
        super();
        this.title = "hola IbLogin"
    }

    static get styles() {
      return css`
          
      body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        display:flex;
      }
      .main {

            width:100px;
            height:150px;  
            margin:0 auto;  
            text-align: center;
          }
      paper-card{
            padding:5px;
          }   
      `;
  }
  
    render() {
    return html`
    <div class="main">
      <paper-card>
        <img src="LogoIB.png">
        <vaadin-text-field placeholder="Elena Torres"></vaadin-text-field>
        <vaadin-password-field placeholder="password"></vaadin-password-field>
        <vaadin-button theme="primary">Click Here</vaadin-button>
      </paper-card>
    </div>
    `;
  }
}

window.customElements.define('ib-login', IbLogin);