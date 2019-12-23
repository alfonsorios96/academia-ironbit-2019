import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';

/**
 * `<battery-component>` creates a battery lvl detector that changes dependes on the battery lvl, also u can
 * modify the battery lvls.
 * to see the battery in action, just punt on your body the tag an that's all
 * <body>
 *   <battery-component></battery-component>
 * And now u have your battery working voalaa
 * @customElement
 * @polymer
 *
 */


class BatteryComponent extends LitElement {
  static get properties() {
    return {
      /** the battery lvl of our battery*/
      batteryLvl: Number,
      /** wheter our battery is connected or not*/
      charge: Boolean
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.batteryLvl = 100;
    this.intervalCharging = 0;
    this.intervaldisCharging = 0;
    this.charge = false;
    }

  render() {
    return html`
        ${this.batteryLvl>60 ? html`<img width="15px" src="../img/llena_bateria.PNG">`: ''}
        ${this.batteryLvl>20 && this.batteryLvl<61 ? html`<img width="15px" src="../img/media_bateria.PNG">`: ''}
        ${this.batteryLvl>9 && this.batteryLvl<21 ? html`<img width="15px" src="../img/poca_bateria.PNG">`: ''}
        <a>%</a><a>${this.batteryLvl}</a>

      `;
    }
  /** Pass the battery to a parent component for its use*/
    passBattery(){
      /** @event battery-request
       *@param {batterylvl} pass the battery lvl!
       * */
      this.dispatchEvent(new CustomEvent('battery-request',{
        detail:{
          batterylvl: this.batteryLvl
        }
      }));
    }

    /** Charge the batterylvl if the charge is connected!*/
    charging(){
      if(this.charge === true){
        if(this.intervaldisCharging !== 0) {
          window.clearInterval(this.intervaldisCharging);
        }
          this.intervalCharging = window.setInterval(()=>{
            this.batteryLvl = this.batteryLvl + 1;
          }, 1000);

      }
    }

  /** Dischrge the batterylvl if the charge is disconnected!*/
    discharging(){
      if(this.charge === false){
        if(this.intervalCharging !== 0) {
          window.clearInterval(this.intervaldisCharging);
        }
          this.intervaldisCharging = window.setInterval(()=>{
            this.batteryLvl = this.batteryLvl - 1;
          }, 1000);

      }
    }

  /** Toggle the charge to off */
    disconnected(){
      if(this.charge === true){
        this.charge = false;
          if(this.intervalCharging !== 0) {
            window.clearInterval(this.intervalCharging);
          }
        }
      }

  /** Toggle the charge to on */
    connected(){
      if(this.charge === false){
        this.charge = true;
        if(this.intervaldisCharging !== 0) {
          window.clearInterval(this.intervaldisCharging);
        }
      }
    }
}

window.customElements.define("battery-component", BatteryComponent);
