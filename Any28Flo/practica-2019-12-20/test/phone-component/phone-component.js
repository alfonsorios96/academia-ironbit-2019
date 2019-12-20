import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
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
    <battery-component></battery-component>
    <player-component></player-component>
      `;
    }
}

window.customElements.define("phone-component", PhoneComponent);
