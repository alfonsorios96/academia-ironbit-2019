import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@catsys/battery-component';
import '@catsys/player-component';

class PhoneComponent extends LitElement {
  static get properties() {
    return {
      today: String,
      days: Array,
      months: Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.date = new Date("December 20, 2019");
  }

  render() {
    return html`
        <paper-card>
          <header>
          <iron-icon icon="vaadin:signal"></iron-icon>
            <div>${this.day()} ${this.date.getDate()} ${this.month()}</div>
            <battery-component></battery-component>
          </header>
          <main>
            <player-component video="../video/ShepherdOfFire.mp3"></player-component>
          </main>
          <footer>
            <iron-icon icon="vaadin:backwards"></iron-icon>
            <iron-icon icon="vaadin:home-o"></iron-icon>
            <iron-icon icon="vaadin:list-select"></iron-icon>
            </footer>
        </paper-card>
  `;}

  day(){
    return this.days[this.date.getDay()]
  }

  month(){
    return this.months[this.date.getMonth()];
  }
  
}

window.customElements.define("phone-component", PhoneComponent);
