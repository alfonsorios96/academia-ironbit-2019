import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      level: Number,
      onCharging: Boolean,
      status: String,
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.level=20;
    this.onCharging=false;
    this.status = "low"
  }

  updated(changedProps) {
    if (changedProps.has('charging')) {
      this.charging();
    }
  }

  render() {
    return html`
      <div class="battery half" ></div>
      `;
  }
  
  batteryStatus(){
    if(this.level >= 0 && this.level <=20){
      this.status = "low"
    }else if(this.level >= 21 && this.level <=60){
      this.status ="medium"
    }else if(this.level >= 61 && this.level <=100){
      this.status = "high"
    }
   
  }
  charging(){
    if(this.onCharging === true){
      this.level +=1;
      this.batteryStatus();
    }

  }
  disconected(){
    if(this.onCharging === false){
     this.level -=1;
     this.batteryStatus();

    }

  }

}

window.customElements.define("battery-component", BatteryComponent);
