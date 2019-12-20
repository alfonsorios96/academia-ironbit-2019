import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@catsys/battery-component';
import '@catsys/player-component'
class PhoneComponent extends LitElement {
  static get properties() {
    return {
      onCharge : Boolean
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.onCharge = false
  }

  render() {
    return html`
    <div class="container">
    <paper-card>
      <div class="card-content">
        <battery-component></battery-component>
        <player-component></player-component>
      </div>
      <div class="card-actions">
        
      </div>
    </paper-card>
      
    </div>
    
      `;
    }
}

window.customElements.define("phone-component", PhoneComponent);
