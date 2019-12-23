import { LitElement, html } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/device-icons.js';

export class BatteryComponent extends LitElement {

    constructor() {
        super();
        this.intervalID = 0;
        this.battery = 0;
        this.isCharging = false;
        this.isDischarging = false;
        this.chargeValue = 2;
        this.dischargeValue = 1;
        this.iconName = '';
    }

    static get properties() {
        return {
            battery : {
                type: Number},
            isCharging : {
                type: Boolean,
                attribute: 'is-charging'},
            isDischarging : {
                type: Boolean,
                attribute: 'is-discharging'},
            chargeValue : {type: Number},
            dischargeValue : {type : Number},
            iconName : {type : String}
        };
    }

    updated(){
        this.__updateBatteryIcon()
        this.dispatchEvent(new CustomEvent('battery-status', {
            detail: {batteryStatus : this.battery}
        }))
    }
    charge(){
        this.isCharging = true;
        this.__useBattery()
        this.dispatchEvent(new Event('charging'))
    }

    stopCharge(){
        this.isCharging = false;
        this.__useBattery()
        this.dispatchEvent(new Event('disconnected'))
    }

    discharge(){
        this.isDischarging = true;
        this.__useBattery()
        this.dispatchEvent(new Event('discharging'))
    }

    stopDischarge(){
        this.isDischarging = false;
        this.__useBattery()
        this.dispatchEvent(new Event('stop-discharging'))
    } 

    __useBattery(){
        clearInterval(this.intervalID)
        if (this.isDischarging && this.isCharging){
            const id = setInterval(()=>{
                this.intervalID = id;
                this.battery < 100 ? this.battery += (this.chargeValue - this.dischargeValue) : this.battery = 100;
            }, 1000)
        } else if(this.isDischarging){
            const id = setInterval(()=>{
                this.intervalID = id;
                this.battery > 0 ? this.battery -= this.dischargeValue : this.battery = 0;
            }, 1000)
        } else if (this.isCharging){
            const id = setInterval(()=>{
                this.intervalID = id;
                this.battery < 100 ? this.battery += this.chargeValue : this.battery = 100;
            }, 1000)
        } else {
            this.battery = this.battery
        }   
    }

    __updateBatteryIcon(){
        this.battery
        if(this.isCharging){
            switch (true) {
                case this.battery === 100:
                    this.iconName = 'device:battery-charging-full'
                    break;
                case this.battery >= 90:
                    this.iconName = 'device:battery-charging-90'
                    break
                case this.battery >= 80 :
                    this.iconName = 'device:battery-charging-80'
                    break
                case this.battery >= 60 :
                    this.iconName = 'device:battery-charging-60'
                    break
                case this.battery >= 50 :
                    this.iconName = 'device:battery-charging-50'
                    break
                case this.battery >= 30 :
                    this.iconName = 'device:battery-charging-30'
                    break
                case this.battery <= 30 :
                    this.iconName = 'device:battery-charging-20'
                    break
            }
        } else {
            switch (true) {
                case this.battery === 100:
                    this.iconName = 'device:battery-full'
                    break;
                case this.battery >= 90:
                    this.iconName = 'device:battery-90'
                    break
                case this.battery >= 80 :
                    this.iconName = 'device:battery-80'
                    break
                case this.battery >= 60 :
                    this.iconName = 'device:battery-60'
                    break
                case this.battery >= 50 :
                    this.iconName = 'device:battery-50'
                    break
                case this.battery >= 30 :
                    this.iconName = 'device:battery-30'
                    break
                case this.battery >= 20 :
                    this.iconName = 'device:battery-20'
                    break
                case this.battery < 20:
                    this.iconName = 'device:battery-alert'
                    break
            }
        }
        
        
    }

    render() {
        return html`
            <iron-icon icon="${this.iconName}"></iron-icon><p>${this.battery} %</p>
        `;
    }
}
customElements.define('battery-component', BatteryComponent);