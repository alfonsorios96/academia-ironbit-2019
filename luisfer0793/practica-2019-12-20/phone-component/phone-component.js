import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '../player-component/player-component.js'
import '../battery-component/battery-component.js'

class PhoneComponent extends LitElement {
    static get properties() {
        return {
            hello: { type: String }
        };
    }
    
    static get styles() {
        return style;
    }
    
    constructor() {
        super();
        this.hello = 'Hello';
    }
    
    render() {
        return html`
            <div>
                <h1>I'm the Phone</h1>
                <player-component ></player-component>
                <battery-component ></battery-component>
            </div>
        `;
    }
}

window.customElements.define("phone-component", PhoneComponent);
