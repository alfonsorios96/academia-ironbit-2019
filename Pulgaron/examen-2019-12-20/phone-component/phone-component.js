import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@catsys/battery-component';
import '@catsys/player-component';

/**
 * `<phone component>` shelter components to create a phone like enviroment!
 * to see the phone in action, just put the phone tag and add some components to it an thats all
 * <body>
 *   <phone-component></phone-component>
 * And now u have your phone working voalaa
 * @customElement
 * @polymer
 *
 */
class PhoneComponent extends LitElement {
  static get properties() {
    return {
      /** here recoieves the batterylvl of th ebattery-component and made use of it to charge and discharge */
      batteryLvl: Number
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.batteryLvl = 0;
  }

  render() {
    return html`
        <nav style="width: 300px">
          <a ><img width="15px" src="https://cdn4.iconfinder.com/data/icons/audio-video-6/16/02_radio-signal-broadcast-512.png"></a>
          <a>2019-12-10 12:29pm</a>
          <battery-component></battery-component>
        </nav>

        <player-component></player-component>
      `;
    }

    /** Gets the battery of  <battery-component>*/
    getBattery(){
      const battery = document.querySelector('battery-component')

      battery.addEventListener('battery-request', event => {
        this.batteryLvl = event.detail;
    });
    }
  /** plays a song if the batterylvl is more than 10%*/
    play(){
      this.getBattery();
      if(this.batteryLvl > 10){
          this.shadowRoot.querySelector('battery-request')
      }
    }
}

window.customElements.define("phone-component", PhoneComponent);
