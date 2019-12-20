import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/device-icons.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      charge :Number
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();

    this.charge = 20;
    

  }

  render() {

    return html`
    <div class="dinamicicon">
      <iron-icon icon="${this.baterystate(this.charge)}"></iron-icon>
    </div>
      `;
    }

    chargin(){


    }

    disconnected(){

    }


  
  baterystate(chargevalue){
    let iconbateri = ''
    if(this.charge<10 ){
     //metodo para pausar la cancion distan > 0  && distan <=2.40
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

    

}

window.customElements.define("battery-component", BatteryComponent);
