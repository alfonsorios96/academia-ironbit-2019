import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@catsys/battery-component';
        import '@catsys/player-component';
class PhoneComponent extends LitElement {
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
      <battery-component></battery-component>
            <player-component></player-component>
      `;
    }
}

window.customElements.define("phone-component", PhoneComponent);
