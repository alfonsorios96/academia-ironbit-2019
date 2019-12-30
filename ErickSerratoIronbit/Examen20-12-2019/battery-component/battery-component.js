import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/device-icons.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      charge :Number,
      state:  String ,
      batteryBars: String,
      connected: Boolean
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.state = 'medium';
    this.batteryBars = '';
    this.connected = false;
    this.chargue = null; 
    this.dischargue = null;
    this.charge = 100;
    

  }

  render() {

    return html`
    <div class="dinamicicon">
      <iron-icon icon="${this.baterystate(this.charge)}"></iron-icon>
    </div>
      `;
    }

    chargin(){

      this.chargue = setInterval(() => {
        if (this.porcentage < 100) {
          this.porcentage = this.porcentage + 1;
          this.state = 'high';
          if(this.porcentage <= 60){
            this.state = 'medium';
          }
          if(this.porcentage <= 20){
            this.state = 'low';
          }
          this.launchEvent('charging');
        }else {
          clearInterval(this.chargue);
        }
        
      },1000);
  
      return this.chargue;
    }

    disconnected(){
      this.dischargue = setInterval(() => {
        if (this.porcentage > 0) {
          this.porcentage = this.porcentage - 1;
          this.state = 'low';
          if(this.porcentage > 20){
            this.state = 'medium';
          }
          if(this.porcentage > 60){
            this.state = 'high';
          }
          this.launchEvent('disconnected');
        }else {
          clearInterval(this.dischargue);
        }
      },1000);
  
      return this.dischargue;
    }


  
  baterystate(chargevalue){
    let iconbateri = ''
    if(this.charge<10 ){
     iconbateri = 'device:battery-20';
    }else{
      if(this.charge >10  && this.charge <=20){
        iconbateri = 'device:battery-20';
      }else{
       if(this.charge >20  && this.charge <=30){
        iconbateri = 'device:battery-30';
       }else{
        if(this.charge >30  && this.charge <=50){
          iconbateri = 'device:battery-50';
        }else{
          if(this.charge >50  && this.charge <=60){
            iconbateri = 'device:battery-60';
          }else{
            if(this.charge >60  && this.charge <=80){
              iconbateri = 'device:battery-80';
            }else{
              if(this.charge >80  && this.charge <99){
                iconbateri = 'device:battery-90';
              }else{
                if(this.charge ==100){
                  iconbateri = 'device:battery-full';
                }else{
                  iconbateri = 'device:battery-alert';
                }
              }
            }
          }
        }
       }
      }
    }
    return iconbateri;
  }  

  launchEvent(nameEvent){
    this.dispatchEvent(new CustomEvent(nameEvent, { 
      detail: {
        porcentage: this.porcentage,
        state: this.state
      } 
    }));
  }

}

window.customElements.define("battery-component", BatteryComponent);
