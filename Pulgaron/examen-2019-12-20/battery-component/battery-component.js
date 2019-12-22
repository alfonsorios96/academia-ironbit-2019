import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';


class BatteryComponent extends LitElement {
  static get properties() {
    return {
      batteryLvl: Number,
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

    passBattery(){
      this.dispatchEvent(new CustomEvent('battery-request',{
        detail:{
          batterylvl: this.batteryLvl
        }
      }));
    }

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

    disconnected(){
      if(this.charge === true){
        this.charge = false;
          if(this.intervalCharging !== 0) {
            window.clearInterval(this.intervalCharging);
          }
        }
      }


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
