import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/device-icons.js';
import '@catsys/battery-component/battery-component.js';
import '@catsys/player-component/player-component.js';

class PhoneComponent extends LitElement {
  static get properties() {
    return {

    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <paper-card  class="card-complete"  >
      <div class="card-heading"   >
        <iron-icon icon="device:signal-cellular-4-bar"></iron-icon>
        <p> Friday, December 20"</p>
        <battery-component id=bateryComponent>   </battery-component>
        
      </div>
      <div class="card-content">
        <player-component song="./Dynamite.mp3"></player-component>
      </div>
      <div class="card-actions">
      <vaadin-button theme="icon" aria-label="Add new item" label="" class="icon-component">
        <iron-icon icon="search"></iron-icon>
      </vaadin-button>
      <vaadin-button theme="icon" aria-label="Add new item" label="" class="icon-component">
        <iron-icon icon="apps"></iron-icon>
      </vaadin-button>
      <vaadin-button theme="icon" aria-label="Add new item" label="" class="icon-component">
        <iron-icon icon="list"></iron-icon>
      </vaadin-button>      
      </div>
    </paper-card>
      `;
    }
}

window.customElements.define("phone-component", PhoneComponent);
