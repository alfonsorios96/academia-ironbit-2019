import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';

class BatteryComponent extends LitElement {
    static get properties() {
        return {
            indicator: Number,
            isCharging: Boolean,
            interval: Object
        };
    }
    
    static get styles() {
        return style;
    }
    
    constructor() {
        super();
        this.indicator = 80;
        this.isCharging = false;
        this.interval = {}
    }
    
    charging() {
        this.interval = setInterval(() => {
            this.indicator++;
        }, 1500);
        this.dispatchEvent(new CustomEvent('charging', {
            detail: {
                indicator: this.indicator
            }
        }));
    }
    
    disconnected() {
        this.dispatchEvent(new CustomEvent('disconnected', {
        
        }));
        window.clearInterval(this.interval);
    }
    
    render() {
        return html`
            <div class="battery-component">
                <div class="battery-component-level">
                    <p class="battery-component-indicator">${this.indicator}%</p>
                </div>
            </div>
            <button @click="${this.charging}">Charge</button>
            <button @click="${this.disconnected}">Discharge</button>
        `;
    }
}

window.customElements.define("battery-component", BatteryComponent);