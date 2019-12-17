import {LitElement, html, css} from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';


class IbLogin extends LitElement {
  static get properties (){
    return {
      Logo: String,
      Username: String,
      Password: String
    }
  }

  static get styles (){
    return css`

    #conteiner, .fields{
      margin-top: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #conteiner{
      margin-top: 15rem;
    }

      `;

  }

  constructor () {
    super ();
    this.Logo = '';
    this.Username = '';
    this.Password = '';
  }

  render(){
    return html `

    <div id ="conteiner">
        <paper-card image="${this.Logo}" > </paper-card>
        <div class = "fields">
          <vaadin-text-field placeholder="${this.Username}"></vaadin-text-field>
          <vaadin-password-field placeholder="${this.Password}"  value="${this.Password}"></vaadin-password-field>
          <vaadin-button theme="primary">Ingresar</vaadin-button>
        </div>
    </div>

    `
    
  }

}

customElements.define('ib-login', IbLogin);