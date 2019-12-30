import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      batery: { type: Number }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.batery = 20;
  }
  charging(e){
    let dis =null;
    let batery = null;

    if(e){
      if(this.batery >= 100){
       alert('The battery is Ready to use');
       clearInterval(dis);
      }else{
          dis = window.setInterval( ()=>{
            batery = this.shadowRoot.getElementById('color-batt');
            // Ir añadiendo cada segundo 
            batery.styles('background-color: blue;');
            this.batery+=1;
          }, 1000);
       }
    }
   
  }
  dissconected(e) {
    let dis =null;
    let batery = null;
    
    if(e){
      if(this.batery <= 0){
       alert('The phone is Death');
       clearInterval(dis);
      }else if(this.batery <=10){
        alert('The battery is low. Connect the charger');
      }
      else{
          dis = setInterval( ()=>{
            batery = this.shadowRoot.getElementById('color-batt');
            // Ir añadiendo cada segundo 
            batery.style();
            this.batery--;
          }, 1000);
       }
    }
   
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.batery} % battery-component</h2>
        <div class="container">
            <div  class =" battery" id="batt"   >
                <div @dblclick = "${this.dissconected}" class ="color-batt" id ="color-batt" @click = "${this.charging}">
              </div>
            </div>
        </div>
      `;
    }
}

window.customElements.define("battery-component", BatteryComponent);
